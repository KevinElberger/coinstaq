import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';

describe('App', function() {
  it('should render without throwing an error', () => {
    const div = 
    expect(shallow(<App />).contains(
      <div className="hello">
        <h1>Coinstaq</h1>
      </div>
    )).toBe(true);
  });

  it('should mount in a full DOM', () => {
   expect(mount(<App />).find('.hello').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<App />).text()).toEqual('Coinstaq');
  });
});