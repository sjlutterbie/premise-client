import React from 'react';
import {shallow, mount} from 'enzyme';

import UserMenu from './index';

describe('<UserMenu />', () => {
  
  it('Renders without crashing', () => {
    shallow(<UserMenu />);
  });
  
});



