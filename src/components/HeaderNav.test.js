import React from 'react';
import {shallow} from 'enzyme';

import HeaderNav from './HeaderNav';

describe('<HeaderNav />', () => {
  
  it('Renders without crashing', () => {
    shallow(<HeaderNav />);
  });
  
});