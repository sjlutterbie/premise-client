import React from 'react';
import {shallow} from 'enzyme';

import LocationBar from './LocationBar';

describe('<LocationBar />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LocationBar />);
  });
  
});