import {required, nonEmpty, email} from './formValidators.js';

describe('Form validators', () => {
  
  describe('required', () => {
    
    it('Should be a function', () => {
      expect(typeof required).toEqual('function');
    });
    
    it('Should return `Required` when called without a parameter', () => {
      expect(required()).toEqual('Required');
    });
    
    it('Should return `undefined` when given a parameter', () => {
      expect(required('foo')).toEqual(undefined);
    });
  });
  
  describe('nonEmpty', () => {
    
    it('Should be a function', () => {
      expect(typeof nonEmpty).toEqual('function');
    });
    
    it('Should return `Cannot be empty` when called '
       + 'with whitespace-only parameter', () => {
      expect(nonEmpty('    ')).toEqual('Cannot be empty');     
    });
    
    it('Should return `undefined` when given a valid parameter', () => {
      expect(nonEmpty('foo')).toEqual(undefined);
    });
    
  });
});