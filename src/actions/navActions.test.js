import {SET_USER_MENU_VIEW, setUserMenuView,
        UPDATE_WINDOW_WIDTH, updateWindowWidth} from './navActions';

describe('Navigation Actions', () => {
  
  describe('setUserMenuView', () => {
    it('Should return the action', () => {
      const action = setUserMenuView();
      expect(action.type).toEqual(SET_USER_MENU_VIEW);
    });
    
    it('Should return the correct value', () => {
      const bool = Math.random() > .5 ? true : false;
      const action = setUserMenuView(bool);
      expect(action.visible).toEqual(bool);
    });
    
  });
  
  describe('updateWindowWidth', () => {
    it('Should return the action', () => {
      const action = updateWindowWidth();
      expect(action.type).toEqual(UPDATE_WINDOW_WIDTH);
    });
    
    it('Should return the correct value', () => {
      const testWidth = Math.random() * 2000;
      const action = updateWindowWidth(testWidth);
      expect(action.width).toEqual(testWidth);
    });
    
  });
  
});