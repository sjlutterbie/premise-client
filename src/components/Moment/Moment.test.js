import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';

import {Moment} from './index';

// Create DEV items

const testMomentText = faker.random.alphaNumeric(50);
  
const testMoment = {
  text: testMomentText
};

const testProps = {
  moment: testMoment
};


describe('<Moment />', () => {
  
  it('Renders without crashing', () => {
    shallow(<Moment {...testProps}/>);
  });
  
  it('Has three primary components', () => {
    const wrapper = shallow(<Moment {...testProps}/>);
    expect(wrapper.children().length).toEqual(3);
  });
  
  it('Renders momentText in the correct place', () => {
    const wrapper = shallow(<Moment {...testProps}/>);
    const para = wrapper.find('.moment-text');
    expect(para.text()).toEqual(testProps.moment.text);
  });
  
});