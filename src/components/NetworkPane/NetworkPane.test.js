import React from 'react';
import {shallow} from 'enzyme';

import NetworkPane from './index';

describe('<NetworkPane />', () => {
  
  it('Renders without crashing', () => {
    shallow(<NetworkPane />);
  });
  
});