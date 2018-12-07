import {default as navReducer, initialState} from './navReducer';
import {SET_USER_MENU_VIEW, setUserMenuView,
        UPDATE_WINDOW_WIDTH, updateWindowWidth} from '../actions';


describe('navState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = ['windowWidth','showUserMenu'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });
  
  
});


describe('Navigation Reducer', () => {

  describe('setUserMenuView(true)', () => {

    it('Sets showUserMenu to true', () => {
      let state = {
        showUserMenu: false
      };
      state = navReducer(state, setUserMenuView(true));
      expect(state).toEqual({
        showUserMenu: true
      });
    });
    
    it('Sets showUserMenu to false', () => {
      let state = {
        showUserMenu: true
      };
      state = navReducer(state, setUserMenuView(false));
      expect(state).toEqual({
        showUserMenu: false
      });
    });
  });

  describe('updateWindowWidth(val)', () => {
    
    it('Should set windowWidth to val', () => {
      let state = {
        windowWidth: null
      };
      let testWidth = Math.random() * 2000;
      state = navReducer(state, updateWindowWidth(testWidth));
      expect(state).toEqual({
        windowWidth: testWidth
      });
    });
  });
  
});