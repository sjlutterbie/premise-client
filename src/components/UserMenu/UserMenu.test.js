import React from 'react';
import {shallow} from 'enzyme';

import {UserMenu} from './index';
import {SET_USER_MENU_VIEW, setUserMenuView} from '../../actions';

describe('<UserMenu />', () => {
  
  
  let clearAuth_test, setUserMenuView_test, testProps; 
  
  beforeEach( () => {
    clearAuth_test = jest.fn();
    setUserMenuView_test = jest.fn();
    testProps = {
      showUserMenu: false,
      clearAuth: clearAuth_test,
      setUserMenuView: setUserMenuView_test
    };  
  });
  
  
  it('Renders without crashing', () => {
    shallow(<UserMenu {...testProps}/>);
  });
  
  it('On clicking i.user-menu-toggle, dispatches setUserMenuView', () => {
    const wrapper = shallow(<UserMenu {...testProps} />);
    wrapper.find('.user-menu-toggle').simulate('click');
    expect(setUserMenuView_test).toHaveBeenCalled();
  });
  
  it('Clicking the `Log Out` button calls logOut', () => {
    testProps.showUserMenu = true;
    const wrapper = shallow(<UserMenu {...testProps} />);
    wrapper.find('.rct-log-out').simulate('click');
    expect(clearAuth_test).toHaveBeenCalled();
  });
  
  
});

