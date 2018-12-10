import React from 'react';
import {shallow, mount} from 'enzyme';
import faker from 'faker';

import {LocationBar} from './index';

let props= {
  currentLocation: 'foo'
};

let wrapper;

describe('<LocationBar />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LocationBar {...props}/>);
  });
  
  it('Renders a <div> element', () => {
    const wrapper = shallow(<LocationBar {...props}/>);
    expect(wrapper.is('div')).toEqual(true);
  });
  
  it('Should render the correct location', () => {
    const testLoc = faker.random.alphaNumeric(10);
    props.currentLocation = testLoc;
    wrapper = shallow(<LocationBar {...props}/>);
    expect(wrapper.text()).toEqual(testLoc);
  });
  
});