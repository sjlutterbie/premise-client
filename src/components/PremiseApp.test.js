import React from 'react';
import {shallow} from 'enzyme';

import PremiseApp from './PremiseApp';

describe('<PremiseApp />', () => {
  
  it('Renders without crashing', () => {
    shallow(<PremiseApp />);
  });
  
});