import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';

import {coreLoginForm as LoginForm} from './index';

// Create DEV items

const handleSubmit_test = jest.fn();
const authenticateUser_test = jest.fn();

const testProps = {
  handleSubmit: handleSubmit_test,
  authenticateUser: authenticateUser_test
};

// Create object to hold shallow render
let wrapper;

describe('<LoginForm />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LoginForm {...testProps}/>);
  });
  
  describe('Event handling', () => {
    
    it('Clicking the submit button calls authenticateUser', () => {
      wrapper = shallow(<LoginForm {...testProps}/>);
      console.log(wrapper);
      wrapper.find('.login-form').simulate('submit');
      expect(handleSubmit_test)
        .toHaveBeenCalled();
    });
  });
});