const path = require('path');
const events = require('events');
const fs = require('fs');

const electron = require('electron');
const app = electron.app;
const Tray = electron.Tray;
const BrowserWindow = electron.BrowserWindow;

const extend = require('extend');
const Positioner = require('electron-positioner');

module.exports = function create(opts) {
  if (typeof opts === 'undefined') opts = {dir: app.getAppPath()};
  if (typeof opts === 'string') opts = {dir: opts};
  if (!opts.dir) opts.dir = app.getAppPath();
  if (!(path.isAbsolute(opts.dir))) opts.dir = path.resolve(opts.dir);
  if (!opts.index) opts.index = 'file://' + path.join(app.getAppPath(), 'app/index.html');
  if (!opts.windowPosition) opts.windowPosition = (process.platform === 'win32') ? 'trayBottomCenter' : 'trayCenter';
  if (typeof opts.showDockIcon === 'undefined') opts.showDockIcon = false;

  opts.width = opts.width || 300;
  opts.height = opts.height || 450;
  opts.tooltip = opts.tooltip || '';

  const menubar = new events.EventEmitter();

  menubar.app = app;

  if (app.isReady()) appReady();
  else app.on('ready', appReady);

  menubar.setOption = function(opt, val) {
    opts[opt] = val;
  }

  menubar.getOption = function(opt) {
    return opts[opt];
  }

  function appReady() {
    // Hide dock unless specified via options
    if (app.dock && !opts.showDockIcon) app.dock.hide();

    const iconPath = opts.icon || path.join(opts.dir, 'icon.png');

    let cachedBounds; // Needed for double-clicks
    const defaultClickEvent = opts.showOnRightClick ? 'right-click' : 'click';

    menubar.tray = opts.tray || new Tray(iconPath);
    menubar.tray.on(defaultClickEvent, clicked);
    menubar.tray.on('double-click', clicked);
    menubar.tray.setToolTip(opts.tooltip);

    let supportsTrayHighlight;

    try {
      menubar.tray.setHighlightMode('never');
      supportsTrayHighlight = true;
    } catch(e) {
      supportsTrayHighlight = false;
    }

    menubar.showWindow = showWindow;
    menubar.hideWindow = hideWindow;

    menubar.emit('ready');

    /**
     * Toggles the window once a click event has been fired
     * 
     * @param {object} e a click event
     * @param {object} bounds x,y coordinates
     */
    function clicked(e, bounds) {
      if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey) {
        return hideWindow();
      }

      if (menubar.window && menubar.window.isVisible()) {
        return hideWindow();
      }

      cachedBounds = bounds || cachedBounds;

      showWindow(cachedBounds);
    }

    function createWindow() {
      menubar.emit('create-window');

      const defaults = {
        show: false,
        frame: false
      };
      const winOpts = extend(defaults, opts);

      menubar.window = new BrowserWindow(winOpts);
      menubar.positioner = new Positioner(menubar.window);

      menubar.window.on('blur', () => {
        opts.alwaysOnTop ? emitBlur() : hideWindow();
      });

      if (opts.showOnAllWorkspaces) {
        menubar.window.setVisibleOnAllWorkspaces(true);
      }

      menubar.window.on('close', windowClear);
      menubar.window.loadURL(opts.index);
      menubar.emit('after-create-window');
    }

    /**
     * Handles where to display the window
     * 
     * @param {object} trayPosition x,y coordinates
     */
    function showWindow(trayPosition) {
      if (supportsTrayHighlight) {
        menubar.tray.setHighlightMode('always');
      }

      if (!menubar.window) {
        createWindow();
      }

      menubar.emit('show');

      if (trayPosition && trayPosition.x !== 0) {
        // Cache the bounds for later use
        cachedBounds = trayPosition;
      } else if (cachedBounds) {
        // Use the cached bounds if showWindow does not have bounds
        trayPosition = cachedBounds;
      } else if (menubar.tray.getBounds) {
        // Use the current tray bounds
        trayPosition = menubar.tray.getBounds();
      }

      // Default to top right (OSX) / bottom right (Win) if no bounds are found
      const noBoundsPos = null;

      if ((!trayPosition || trayPosition.x === 0) && opts.windowPosition.substr(0,4) === 'tray') {
        noBoundsPos = (process.platform === 'win32') ? 'bottomRight' : 'topRight';
      }

      const position = menubar.positioner.calculate(noBoundsPos || opts.windowPosition, trayPosition);

      const x = opts.x ? opts.x : position.x;
      const y = opts.y ? opts.y : position.y;

      menubar.window.setPosition(x, y);
      menubar.window.show();
      menubar.emit('after-show');
    }

    function hideWindow() {
      if (supportsTrayHighlight) {
        menubar.tray.setHighlightMode('never');
      }

      if (!menubar.window) return;

      menubar.emit('hide');
      menubar.window.hide();
      menubar.emit('after-hide');
    }

    function windowClear() {
      delete menubar.window;
      menubar.emit('after-close');
    }

    function emitBlur() {
      menubar.emit('focus-lost');
    }
  }

  return menubar;
};