import React from 'react';
import {shallow, mount} from 'enzyme';

import UserMenu from './UserMenu';

describe('<UserMenu />', () => {
  
  it('Renders without crashing', () => {
    shallow(<UserMenu />);
  });
  
  it('Renders a <div> element', () => {
    const wrapper = shallow(<UserMenu />);
    expect(wrapper.is('div')).toEqual(true);
  });
  
  it('Renders with the correct default state', () => {
    const wrapper = shallow(<UserMenu />);
    expect(wrapper.state('showMenu')).toEqual(false);
  });
  
  it('Renders the correct default structure', () => {
    const wrapper = shallow(<UserMenu />);
    expect(wrapper.find('div').children().is('i')).toEqual(true);
  });
  
  it('Setting showMenu=true renders the menu', () => {
    const wrapper = shallow(<UserMenu />);
    wrapper.setState({showMenu: true});
    expect(wrapper.find('div').children().length).toEqual(2);
    expect(wrapper.find('div').children().first().is('i')).toEqual(true);
    expect(wrapper.find('div').children().last().is('ul')).toEqual(true);
  });

});