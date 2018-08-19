const electron = require('electron');
const {app, tray, BrowserWindow} = electron;
const menubar = require('./menubar');

// Reload when webpack watches changes in ./app/
require('electron-reload')(__dirname);

const mb = menubar();

mb.on('ready', () => {
    console.log('app is ready');
})