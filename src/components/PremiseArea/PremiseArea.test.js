import React from 'react';
import {shallow} from 'enzyme';

import PremiseArea from './index';

describe('<PremiseArea />', () => {
  
  it('Renders without crashing', () => {
    shallow(<PremiseArea />);
  });
  
});