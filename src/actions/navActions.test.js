import {CLOSE_USER_MENU, closeUserMenu,
        OPEN_USER_MENU, openUserMenu} from './navActions';

describe('Navigation Actions', () => {
  
  describe('openUserMenu', () => {
    const action = openUserMenu();
    expect(action.type).toEqual(OPEN_USER_MENU)
  });
  
  describe('closeUserMenu', () => {
    it('Should return the action', () => {
      const action = closeUserMenu();
      expect(action.type).toEqual(CLOSE_USER_MENU);
    });
    
  });
  
});