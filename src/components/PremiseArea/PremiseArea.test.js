import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';


import {PremiseArea} from './index';

// Create default testing environment

let loadStoryNetwork_test = jest.fn();

let props = {
  visiblePanes: [],
  loadStoryNetwork: loadStoryNetwork_test
};


describe('<PremiseArea />', () => {
  
  it('Renders without crashing', () => {
    shallow(<PremiseArea {...props}/>);
  });
  
  describe('visiblePanes rendering', () => {
    
    it('Only renders <ReaderPane/> when specified', () => {
      const testCases = [
        // [visiblePanes, render <ReaderPane/> ? 1: 0]
        [['reader'], 1],
        [[faker.random.alphaNumeric(10)], 0]
      ];
      testCases.forEach(testCase => {
        props.visiblePanes = testCase[0];
        const wrapper = shallow(<PremiseArea {...props}/>);
        expect(wrapper.find('.rct-readerpane-wrapper').length)
          .toEqual(testCase[1]);
      });
    });
    
    it('Only renders <NetworkPane /> when specified', () => {
      const testCases = [
        // [visiblePanes, render <NetworkPane/> ? 1: 0]
        [['network'], 1],
        [[faker.random.alphaNumeric(10)], 0]
      ];
      testCases.forEach(testCase => {
        props.visiblePanes = testCase[0];
        const wrapper = shallow(<PremiseArea {...props}/>);
        expect(wrapper.find('.rct-networkpane-wrapper').length)
          .toEqual(testCase[1]);
      });
    });
    
    
    
  });
  
  
});