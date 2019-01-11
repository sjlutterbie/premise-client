import React from 'react';
import {shallow} from 'enzyme';


import {LandingPage} from './index';

// Create DEV items

let updateLandingPageForm_test;
let testProps;

beforeEach(() => {
  updateLandingPageForm_test = jest.fn();

  testProps = {
    loggedIn: false,
    form: 'login',
    updateLandingPageForm: updateLandingPageForm_test
  };
});

// Create object to hold shallow render
let wrapper;

describe('<LandingPage />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LandingPage {...testProps}/>);
  });
  
  describe('state.form === `login` renders correctly', () => {
    
    it('Should display the login form by default', () => {
      const wrapper = shallow(<LandingPage {...testProps}/>);
      expect(wrapper.find('.rct-login-form-wrapper').length).toEqual(1);
    });
    
    it('Should display the `register` form toggle link by default', () => {
      const wrapper = shallow(<LandingPage {...testProps}/>);
      expect(wrapper.find('.rct-form-toggle-link').text()).toEqual('Register');
    });
  });
  
  describe('state.form === `registration` renders correctly', () => {
    
    it('Should display the registration form', () => {
      testProps.form = 'registration';
      const wrapper = shallow(<LandingPage {...testProps}/>);
      expect(wrapper.find('.rct-registration-form-wrapper').length).toEqual(1);
    });
    
    it('Should display the `login` form toggle link', () => {
      testProps.form = 'registration';
      const wrapper = shallow(<LandingPage {...testProps}/>);
      expect(wrapper.find('.rct-form-toggle-link').text()).toEqual('Login');
    });
  });
  
  describe('Event handling', () => {
    
    it('Clicking the `Register` link dispatches the correct action', () => {
      let wrapper = shallow(<LandingPage {...testProps}/>);
      wrapper.find('.rct-form-toggle-link').simulate('click');
      expect(updateLandingPageForm_test).toHaveBeenCalledWith('registration');
    });
    
    it('Clicking the `Login` liunk dispatches the correct action', () => {
      testProps.form = 'registration';
      let wrapper = shallow(<LandingPage {...testProps}/>);
      wrapper.find('.rct-form-toggle-link').simulate('click');
      expect(updateLandingPageForm_test).toHaveBeenCalledWith('login');
    });  

  });
  
});