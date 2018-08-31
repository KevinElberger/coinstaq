import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { HashRouter } from 'react-router-dom';
import App from '../src/App';

describe('App', function() {
  it('should mount in a full DOM', () => {
   expect(mount(<HashRouter><App /></HashRouter>).find('#app').length).toBe(1);
  });
});