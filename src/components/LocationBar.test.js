import React from 'react';
import {shallow, mount} from 'enzyme';
import faker from 'faker';

import LocationBar from './LocationBar';

describe('<LocationBar />', () => {
  
  it('Renders without crashing', () => {
    shallow(<LocationBar />);
  });
  
  it('Renders a <div> element', () => {
    const wrapper = shallow(<LocationBar />);
    expect(wrapper.is('div')).toEqual(true);
  });
  
  it('Should render the correct location', () => {
    const testLoc = faker.random.alphaNumeric(10);
    const wrapper = mount(
      <LocationBar location={testLoc} />
    );
    expect(wrapper.text()).toEqual(testLoc);
  });
  
});