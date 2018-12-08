import React from 'react';
import {shallow, mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import sinon from 'sinon';
import faker from 'faker';

import {PremiseApp} from './PremiseApp';

describe('<PremiseApp />', () => {
  
  it('Renders without crashing', () => {
    const props = {
      updateWindowWidth: jest.fn(),
      loadDefaultBranch: jest.fn()
    };
    shallow(<PremiseApp {...props}/>);
  });
  
  // TODO: Complete tests for responsive rendering
  
  describe('Responsive rendering', () => {
    
    let props;
    
    beforeEach(() => {
      props = {
        updateWindowWidth: jest.fn(),
        loadDefaultBranch: jest.fn()
      };
    });
    
    it('Only renders <MobileNav/> in mobile view', () => {
      const testCases = [
        // [currentView, mobNavRender? 1=yes, 0=no]
        ['mobile', 1],
        ['desktop', 0],
        // 'Other' case
        [faker.random.alphaNumeric(5), 0]
      ];
      testCases.forEach(testCase => {
        props.responsiveBracket = testCase[0];
        const wrapper = shallow(<PremiseApp {...props}/>);
        const mobNav = wrapper.find('.mob-nav-wrapper');
        expect(mobNav.length).toEqual(testCase[1]);
      });
    });
    
  });
  
  describe('ComponentWillMount', () => {
    
    let updateWindowWidth;
    let loadDefaultBranch;
    let props;
    
    beforeEach(() => {
      updateWindowWidth = jest.fn();
      loadDefaultBranch = jest.fn();
      props = {updateWindowWidth, loadDefaultBranch};
    })
    
    it('Calls the lifecycle method', ()=> {
      jest.spyOn(PremiseApp.prototype, 'componentWillMount');
      const wrapper = shallow(<PremiseApp {...props}/>);
      expect(PremiseApp.prototype.componentWillMount.mock.calls.length).toBe(1)
    });
    
    it('Calls the correct methods', () => {
      const wrapper = shallow(<PremiseApp {...props}/>);
      expect(updateWindowWidth).toHaveBeenCalled();
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
      expect(updateWindowWidth).toHaveBeenCalled();
    });

  });
  
  // TODO: Testing React Router routes
    // path "/premise" should load <PremiseArea />
    // path "/userguide" should load <UserGuide />
    // Establish & test error handling
  
});