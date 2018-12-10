import React from 'react';
import {shallow, mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import sinon from 'sinon';
import faker from 'faker';

import {PremiseApp} from './PremiseApp';

// Set up testing environment
let props = {
  loadDefaultBranch: jest.fn(),
  monitorResponsiveBracket: jest.fn(),
  
  updateWindowWidth: jest.fn(),
  
  responsiveBracket: 'small',
  visiblePanes: []
};

describe('<PremiseApp />', () => {
  
  it('Renders without crashing', () => {
    shallow(<PremiseApp {...props}/>);
  });
  
  describe('visiblePanes rendering', () => {
    
    it('Only renders <UserGuide /> when specified', () => {
      const testCases = [
        // [visiblePanes, render <PremiseArea/>? 1=yes, 0=no]
        [['userguide'], 1],
        [[faker.random.alphaNumeric(10)],0]
      ];
      testCases.forEach(testCase => {
        props.visiblePanes = testCase[0];
        const wrapper = shallow(<PremiseApp {...props}/>);
        expect(wrapper.find('.rct-userguide-wrapper').length)
          .toEqual(testCase[1]);
      });
    });
    
    it('Only renders <MobileNav /> when specified', () => {
      const testCases = [
        // [visiblePanes, render <MobileNav/> ? 1 : 0]
        [['mobileNav'],1],
        [[faker.random.alphaNumeric(10)],0]
      ];
      testCases.forEach(testCase => {
        props.visiblePanes = testCase[0];
        const wrapper = shallow(<PremiseApp {...props}/>);
        expect(wrapper.find('.rct-mob-nav-wrapper').length)
          .toEqual(testCase[1]);
      });
    });
  });

  describe('ComponentWillMount', () => {
    
    let loadDefaultBranch;
    let monitorResponsiveBracket;

    beforeEach(() => {
      loadDefaultBranch = jest.fn();
      monitorResponsiveBracket = jest.fn();

      props = Object.assign({}, props, {
        monitorResponsiveBracket,
        loadDefaultBranch
      });
    });
    
    it('Calls the lifecycle method', ()=> {
      jest.spyOn(PremiseApp.prototype, 'componentWillMount');
      const wrapper = shallow(<PremiseApp {...props}/>);
      expect(PremiseApp.prototype.componentWillMount.mock.calls.length).toBe(1)
    });
    
    it('Calls the correct methods', () => {
      const wrapper = shallow(<PremiseApp {...props}/>);
      expect(monitorResponsiveBracket).toHaveBeenCalled();
    });
    
    it('Adds an event listener', () => {
      // Create mock addEventListener
      window.addEventListener = jest.fn();
      // Load component
      const wrapper = shallow(<PremiseApp {...props}/>);
      // Run Test
      expect(window.addEventListener).toHaveBeenCalled();
    });
    
    it('The eventListener fires when necessary', () => {
      // Set up mock eventListener
      const map = {};
      window.addEventListener = jest.fn((event, callback) => {
        map[event] = callback;
      });
      // Load component
      const wrapper = shallow(<PremiseApp {...props}/>);
      // Run test
      map.resize();
      expect(monitorResponsiveBracket).toHaveBeenCalled();
    });
  });
});