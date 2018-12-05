import navReducer from './navReducer';
import {SET_USER_MENU_VIEW, setUserMenuView} from '../actions';

describe('Navigation Reducer', () => {

  describe('setUserMenuView(true)', () => {

    it('Should set showUserMenu to true', () => {
      let state = {
        showUserMenu: false
      };
      state = navReducer(state, setUserMenuView(true));
      expect(state).toEqual({
        showUserMenu: true
      });
    });
    
    it('Should set showUserMenu to false', () => {
      let state = {
        showUserMenu: true
      };
      state = navReducer(state, setUserMenuView(false));
      expect(state).toEqual({
        showUserMenu: false
      });
    });
  });
});