import faker from 'faker';

import {REGISTER_NEW_USER, registerNewUser,
        AUTHENTICATE_USER, authenticateUser,
        START_USER_AUTH, startUserAuth,
        SET_AUTH_TOKEN, setAuthToken,
        CLEAR_AUTH, clearAuth,
        AUTH_ERROR, authError
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
      const testUsername = faker.random.alphaNumeric(10);
      const action = authenticateUser(testUsername);
      expect(action.username).toEqual(testUsername);
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
  
  describe('setAuthToken', () => {
    
    it('Should return the action', () => {
      const action = setAuthToken();
      expect(action.type).toEqual(SET_AUTH_TOKEN);
    });
    
    it('Should return the correct value', () => {
      const testToken = faker.random.alphaNumeric(10);
      const action = setAuthToken(testToken);
      expect(action.authToken).toEqual(testToken);
    });
    
  });
  
  describe('clearAuth', () => {
    
    it('Should return the action', () => {
      const action = clearAuth();
      expect(action.type).toEqual(CLEAR_AUTH);
    });
    
  });
  
  describe('authError', () => {
    
    it('Should return the action', () => {
      const action = authError();
      expect(action.type).toEqual(AUTH_ERROR);
    });
    
    it('Should return the correct value', () => {
      const testError = faker.random.alphaNumeric(10);
      const action = authError(testError);
      expect(action.error).toEqual(testError);
    });
    
  });
  
    
});