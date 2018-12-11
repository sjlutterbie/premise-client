import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';


import {ReaderPane} from './index';

describe('<ReaderPane />', () => {
  
  let wrapper;
  let testProps = {
    moments: []
  };
  
  
  beforeEach(() => {
    wrapper = shallow(<ReaderPane {...testProps}/>);
  });
  
  it('Renders without crashing', () => {
    shallow(<ReaderPane {...testProps}/>);
  });
  
  it('Has at least one child element', () => {
    expect(wrapper.children().length).toBeGreaterThanOrEqual(1);
  });
  
  it('<ReaderPane/>.children().length === props.moments.length', () => {
    
    // Generate between 1 and 10 moments
    const moments = [];
    const momentCount = Math.floor((Math.random() * 10) + 1);
    for (let i = 0; i < momentCount; i++) {
      moments.push({
        id: faker.random.uuid(),
        text: faker.lorem.sentences(4)
      });
    }
    testProps.moments = moments;
    wrapper = shallow(<ReaderPane {...testProps}/>);
    const momentArea = wrapper.find('.reader-pane');
    expect(momentArea.children().length).toEqual(testProps.moments.length);
    
  });


  
});