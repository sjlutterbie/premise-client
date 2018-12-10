import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';

import {UserGuide} from './index';


let props = {
  responsiveBracket: 'small',
  userGuidePage: 'page1',
  userGuideData: {
    page1: {
      content: 'asdf',
      prev: 'page1',
      next: 'page3'
    }
  },
  addVisiblePanes: jest.fn(),
  removeVisiblePanes: jest.fn(),
  updateUserGuidePage: jest.fn(),
  updateCurrentLocation: jest.fn()
};

let wrapper;

describe('<UserGuide />', () => {
  
  beforeEach(() => {
    wrapper = shallow(<UserGuide {...props}/>);
  });
  
  it('Renders without crashing', () => {
    shallow(<UserGuide {...props}/>);
  });
  
  describe('Content rendering', () => {
    
    it('Has the correct structure', () => {
      expect(wrapper.find('button.rct-exit-userguide').length).toEqual(1);
      expect(wrapper.find('.userguide-content-area').length).toEqual(1);
      expect(wrapper.find('button.rct-userguide-prev').length).toEqual(1);
      expect(wrapper.find('button.rct-userguide-next').length).toEqual(1);
    });
    
    it('Renders userGuideData content correctly', () => {
      const testGuideContent = faker.random.alphaNumeric(10);
      props.userGuidePage = 'testPage';
      props.userGuideData = {
          testPage: {
            content: testGuideContent
          }
        };
      wrapper = shallow(<UserGuide {...props}/>);
      expect(wrapper.find('.userguide-content-area').text())
        .toEqual(testGuideContent);
    });
    
    it('Only renders prev/next buttons when expected', () => {
      const testCases = [
        //[prevPage, nextPage, renderPrev ? 1 : 0, renderNext ? 1 : 0]
        // Render both
        ['asdf', 'asdf', 1, 1],
        // Only render Prev
        ['asdf', null, 1, 0],
        // Only render Next
        [null, 'asdf', 0, 1],
        // Render neither
        [null, null, 0, 0]
      ];
      testCases.forEach(testCase => {
        props.userGuideData = {
          testPage: {
            content: 'asdf',
            prev: testCase[0],
            next: testCase[1]
          }
        };
        wrapper = shallow(<UserGuide {...props}/>);
        expect(wrapper.find('.rct-userguide-prev').length)
          .toEqual(testCase[2]);
        expect(wrapper.find('.rct-userguide-next').length)
          .toEqual(testCase[3]);
      });
    });
  });

  describe('Event handling', () => {
    
    it('Clicking .rct-exit-userguide calls actions as expected', () => {
      const testCases = [
        // [responsiveBracket, expectedAddPanes, expectedRemovePanes]
        ['small', ['reader'], ['userguide']],
        ['large', [], ['userguide']]
      ];
      
      testCases.forEach(testCase => {
        props.responsiveBracket = testCase[0];
        wrapper = shallow(<UserGuide {...props}/>);
        wrapper.find('.rct-exit-userguide').simulate('click');
        expect(props.addVisiblePanes)
          .toHaveBeenCalledWith(testCase[1]);
        expect(props.removeVisiblePanes)
          .toHaveBeenCalledWith(testCase[2]);
        expect(props.updateCurrentLocation)
          .toHaveBeenCalled();
      });
    });

    it('Clicking .rct-userguide-prev updates fires action correctly', () => {
      const testPage = faker.random.alphaNumeric(10);
      props.userGuidePage = 'page1';
      props.userGuideData = {
        page1: {
          content: 'asdf',
          prev: testPage,
          next: 'asdf'
        } 
      };
      wrapper = shallow(<UserGuide {...props}/>);
      wrapper.find('.rct-userguide-prev').simulate('click');
      expect(props.updateUserGuidePage)
        .toHaveBeenCalledWith(testPage);
    });
    
    it('Clicking .rct-userguide-next updates fires action correctly', () => {
      const testPage = faker.random.alphaNumeric(10);
      props.userGuidePage = 'page1';
      props.userGuideData = {
        page1: {
          content: 'asdf',
          prev: 'asdf',
          next: testPage
        } 
      };
      wrapper = shallow(<UserGuide {...props}/>);
      wrapper.find('.rct-userguide-next').simulate('click');
      expect(props.updateUserGuidePage)
        .toHaveBeenCalledWith(testPage);
    });
  });
});