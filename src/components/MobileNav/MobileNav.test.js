import React from 'react';
import {shallow} from 'enzyme';

import {MobileNav} from './index';

// Declare/create testing variables/objects
let wrapper;

describe('<MobileNav/>', () => {
  
  beforeEach(() => {
    wrapper = shallow(<MobileNav/>);
  });
  
  
  it('Renders without crashing', () => {
    shallow(<MobileNav />);
  });
  
  it('Consists of two buttons', () => {
    const buttons = wrapper.find('button');
    expect(buttons.length).toEqual(2);
  });
  
  it('Butons are correctly identified', () => {
    const buttons = wrapper.find('button');
    expect(buttons.find('.rct-network-pane').length).toEqual(1);
    expect(buttons.find('.rct-reader-pane').length).toEqual(1);
  });
  
  
});