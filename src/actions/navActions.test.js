import {CLOSE_USER_MENU, closeUserMenu} from './navActions';

describe('Navigation Actions', () => {
  
  describe('closeUserMenu', () => {
    it('Should return the action', () => {
      const action = closeUserMenu();
      expect(action.type).toEqual(CLOSE_USER_MENU);
    });
    
  });
  
});