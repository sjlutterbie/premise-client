import React from 'react';
import {shallow} from 'enzyme';

import UserGuide from './index';

describe('<UserGuide />', () => {
  
  it('Renders without crashing', () => {
    shallow(<UserGuide />);
  });
  
});