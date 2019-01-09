import React from 'react';
import {shallow} from 'enzyme';

import {default as requiresLogin} from './index';

// Create test items

const testProps = {
  foo: 'bar'
};

const state = {
  userAuth: {
    authenticating: false,
    currentUser: 'asdf',
    error: false
  }
};

function innerComponent(props) {
  return (
    <div {...props}></div>
  );
}

// Create object to hold shallow render
let wrapper;

describe('requiresLogin', () => {

  it('Is a function', () => {
    expect(typeof requiresLogin).toEqual('function');
  });
  
  it('Returns a function', () => {
    expect(typeof requiresLogin()).toEqual('function');
  });
  
  it('Given a component, creates a component', () => {
    const TestComponent = requiresLogin()(innerComponent);
    shallow(<TestComponent {...testProps}/>);
  });
  
  // STRETCH GOAL:
    // Complete unit test coverage; may require re-writing innerComponent
});