import faker from 'faker';

import {REGISTER_NEW_USER, registerNewUser,
        AUTHENTICATE_USER, authenticateUser,
        START_AUTH_REQUEST, startAuthRequest,
        APPROVE_AUTH_REQUEST, approveAuthRequest,
        REJECT_AUTH_REQUEST, rejectAuthRequest,
        SET_AUTH_TOKEN, setAuthToken
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
  
  describe('startAuthRequest', () => {
    
    it('Should return the action', () => {
      const action = startAuthRequest();
      expect(action.type).toEqual(START_AUTH_REQUEST);
    });
  });
  
  describe('approveAuthRequest', () => {
    
    it('Should return the action', () => {
      const action = approveAuthRequest();
      expect(action.type).toEqual(APPROVE_AUTH_REQUEST);
    });
    
  });
  
  describe('rejectAuthRequest', () => {
    
    it('Should return the action', () => {
      const action = rejectAuthRequest();
      expect(action.type).toEqual(REJECT_AUTH_REQUEST);
    });
    
    it('Should return the value', () => {
      const testError = {
        error: faker.random.alphaNumeric(10)
      };
      const action = rejectAuthRequest(testError);
      expect(action.error).toEqual(testError);
    });
  });
  
  describe('setAuthToken', () => {
    
    it('Should return the action', () => {
      const action = setAuthToken();
      expect(action.type).toEqual(SET_AUTH_TOKEN);
    });
    
    it('Should return the authToken', () => {
      const testToken = faker.random.alphaNumeric(10);
      const action = setAuthToken(testToken);
      expect(action.authToken).toEqual(testToken);
    });
  });
  
});