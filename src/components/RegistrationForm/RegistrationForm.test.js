import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';

import {coreRegistrationForm as RegistrationForm} from './index';

// Create DEV items

const handleSubmit_test = jest.fn();

const testProps = {
  handleSubmit: handleSubmit_test,
  registerNewUser: jest.fn() // Not called directly, so not tested
  
};

// Create object to hold shallow render
let wrapper;

describe('<RegistrationForm />', () => {
  
  it('Renders without crashing', () => {
    shallow(<RegistrationForm {...testProps}/>);
  });
  
  describe('Event handling', () => {
    
    it('Clicking the submit button calls authenticateUser', () => {
      wrapper = shallow(<RegistrationForm {...testProps}/>);
      wrapper.find('form').simulate('submit');
      expect(handleSubmit_test).toHaveBeenCalled();
    });
  });
});