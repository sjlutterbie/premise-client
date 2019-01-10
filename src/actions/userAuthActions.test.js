import faker from 'faker';

import {
  AUTH_REQUEST, authRequest,
  AUTH_SUCCESS, authSuccess,
  AUTH_ERROR, authError,
  SET_AUTH_TOKEN, setAuthToken,
  CLEAR_AUTH, clearAuth,
} from './userAuthActions';

describe('User Authentication Actions', () => {
  
  describe('authRequest', () => {
    
    it('Should return the action, and expected values', () => {
      const action = authRequest();
      expect(action.type).toEqual(AUTH_REQUEST);
      expect(action.authenticating).toEqual(true);
      expect(action.error).toEqual(null);
    });
  });  
  
  describe('authSuccess', () => {
    
    it('Should return the action', () => {
      const action = authSuccess();
      expect(action.type).toEqual(AUTH_SUCCESS);
    });
    
    it('Should return the correct values', () => {
      const testUsername = faker.random.alphaNumeric(10);
      const action = authSuccess(testUsername);
      expect(action.username).toEqual(testUsername);
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
    
    it('Should return the correct values', () => {
      const action = clearAuth();
      expect(action.authToken).toEqual(null);
      expect(action.currentUser).toEqual(null);
    });
  });

  // TODO:
    // storeAuthInfo
    // loginUser
    // refreshAuthToken

});