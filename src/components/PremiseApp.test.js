import React from 'react';
import {shallow, mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import sinon from 'sinon';

import {PremiseApp} from './PremiseApp';

describe('<PremiseApp />', () => {
  
  it('Renders without crashing', () => {
    const props = {
      updateWindowWidth: jest.fn(),
      loadDefaultBranch: jest.fn()
    };
    shallow(<PremiseApp {...props}/>);
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