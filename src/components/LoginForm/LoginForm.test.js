import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';

import {LoginForm} from './index';

// Create DEV items

const testProps = {};

// Create object to hold shallow render
let wrapper;

describe('<LoginForm />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LoginForm {...testProps}/>);
  });
  
});