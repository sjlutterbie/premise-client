import React from 'react';
import {shallow} from 'enzyme';


import ReaderPane from './index';

describe('<ReaderPane />', () => {
  
  it('Renders without crashing', () => {
    shallow(<ReaderPane />);
  });
  
});