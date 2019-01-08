import React from 'react';
import {shallow} from 'enzyme';

import {default as RegistrationForm} from './index';

// Create DEV items

const testProps = {};

// Create object to hold shallow render
let wrapper;

describe('<RegistrationForm />', () => {
  
  it('Renders without crashing', () => {
    shallow(<RegistrationForm/>);
  });
  
});