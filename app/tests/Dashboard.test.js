import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Dashboard from '../src/components/Dashboard/Dashboard';

describe('Dashboard', function() {
  it('should render without throwing an error', () => {
    const div = 
    expect(shallow(<Dashboard />).contains(
      <div>
        <h1>Dashboard</h1>
      </div>
    )).toBe(true);
  });

  it('should mount in a full DOM', () => {
   expect(mount(<Dashboard />).find('h1').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Dashboard />).text()).toEqual('Dashboard');
  });
});