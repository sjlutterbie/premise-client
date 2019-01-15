import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './index';

describe('<Header />', () => {
  
  let wrapper;
  let testProps;
  
  beforeEach(() => {
    testProps = {
      loggedIn: true
    };
  }); 
  
  it('Renders without crashing', () => {
    shallow(<Header {...testProps}/>);
  });
  
  it('Renders <HeaderNav /> when loggedIn === true', () => {
    wrapper = shallow(<Header {...testProps}/>);
    expect(wrapper.find('.rct-header-wrapper').length).toEqual(1);
  });
  
  it('Does not render <HeaderNav /> when loggedIn === false', () => {
    testProps.loggedIn = false;
    wrapper = shallow(<Header {...testProps}/>);
    expect(wrapper.find('.rct-header-wrapper').length).toEqual(0);
  });
});