import faker from 'faker';

import {REGISTER_NEW_USER, registerNewUser,
        AUTHENTICATE_USER, authenticateUser,
        START_USER_AUTH, startUserAuth
} from './userAuthActions';

describe('User Authentication Actions', () => {
  
  describe('registerNewUser', () => {
    
    it('Should return the action', () => {
      const action = registerNewUser();
      expect(action.type).toEqual(REGISTER_NEW_USER);
    });
    
    it('Should return the correct values', () => {
      const testObject = {
        username: faker.random.alphaNumeric(10),
        password: faker.random.alphaNumeric(10)
      };
      const action = registerNewUser(testObject);
      expect(action.values).toEqual(testObject);
    });
  });
  
  describe('authenticateUser', () => {
    
    it('Should return the action', () => {
      const action = authenticateUser();
      expect(action.type).toEqual(AUTHENTICATE_USER);
    });
    
    it('Should return the correct values', () => {
      const testObject = {
        username: faker.random.alphaNumeric(10),
        password: faker.random.alphaNumeric(10)
      };
      const action = authenticateUser(testObject);
      expect(action.values).toEqual(testObject);
    });
    
  });
  
  describe('startUserAuth', () => {
    
    it('Should return the action, and expected values', () => {
      const action = startUserAuth();
      expect(action.type).toEqual(START_USER_AUTH);
      expect(action.authenticating).toEqual(true);
      expect(action.error).toEqual(null);
    });

  });
  
    
});