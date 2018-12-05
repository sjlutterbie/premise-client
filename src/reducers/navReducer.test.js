import navReducer from './navReducer';
import {CLOSE_USER_MENU, closeUserMenu,
        OPEN_USER_MENU, openUserMenu} from '../actions';

describe('Navigation Reducer', () => {

  describe('openUserMenu', () => {
    it ('Should set showUserMenu to true', () => {
      let state = {
        showUserMenu: false
      };
      state = navReducer(state, openUserMenu());
      expect(state).toEqual({
        showUserMenu: true
      });
    });
  });
  
  
  describe('closeUserMenu', () => {
    it ('Should set showUserMenu to false', () => {
      let state = {
        showUserMenu: true
      };
      state = navReducer(state, closeUserMenu());
      expect(state).toEqual({
        showUserMenu: false
      });
    });
  });
  
});