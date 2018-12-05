import {SET_USER_MENU_VIEW, setUserMenuView} from './navActions';

describe('Navigation Actions', () => {
  
  describe('setUserMenuView', () => {
    it('Should return the action', () => {
      const action = setUserMenuView();
      expect(action.type).toEqual(SET_USER_MENU_VIEW)
    });
  });
  
});