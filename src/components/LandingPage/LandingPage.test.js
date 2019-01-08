import React from 'react';
import {shallow} from 'enzyme';


import {LandingPage} from './index';

// Create DEV items

const testProps = {};

// Create object to hold shallow render
let wrapper;

describe('<LandingPage />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LandingPage {...testProps}/>);
  });
});