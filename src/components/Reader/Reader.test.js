import React from 'react';
import {shallow} from 'enzyme';


import Reader from './index';

describe('<Reader />', () => {
  
  it('Renders without crashing', () => {
    shallow(<Reader />);
  });
  
});