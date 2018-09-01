import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Portfolio from '../src/components/Portfolio/Portfolio';

describe('Portfolio', function() {
  it('should render without throwing an error', () => {
    const div = 
    expect(shallow(<Portfolio />).contains(
      <h5 className="title">Your Portfolio</h5>      
    )).toBe(true);
  });

  it('should mount in a full DOM', () => {
   expect(mount(<Portfolio />).find('.wallet').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Portfolio />).find('.title').text()).toEqual('Your Portfolio');
  });
});