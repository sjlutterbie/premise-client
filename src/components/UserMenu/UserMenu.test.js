import React from 'react';
import {shallow} from 'enzyme';

import {UserMenu} from './index';
import {SET_USER_MENU_VIEW, setUserMenuView} from '../../actions';

describe('<UserMenu />', () => {
  
  it('Renders without crashing', () => {
    shallow(<UserMenu />);
  });
  
  it('On clicking i.user-menu-toggle, dispatches setUserMenuView', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<UserMenu dispatch={dispatch} />);
    
    wrapper.find('.user-menu-toggle').simulate('click');
    
    expect(dispatch).toHaveBeenCalledWith(
      {
        visible: expect.any(Boolean),
        type: SET_USER_MENU_VIEW
      }
    );
    
    
  });
  
  
});

