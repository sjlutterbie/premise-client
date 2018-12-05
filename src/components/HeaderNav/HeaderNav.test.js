import React from 'react';
import {shallow} from 'enzyme';

import HeaderNav from './index';

describe('<HeaderNav />', () => {
  
  it('Renders without crashing', () => {
    shallow(<HeaderNav />);
  });
  
});