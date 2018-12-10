import React from 'react';
import {shallow} from 'enzyme';

import {HeaderNav} from './index';

let props;
let wrapper;

describe('<HeaderNav />', () => {

  beforeEach(() => {
    
    props = {
      addVisiblePanes: jest.fn(),
      removeVisiblePanes: jest.fn(),
      updateCurrentLocation: jest.fn(),
      responsiveBracket: 'small'
    };
    
    wrapper = shallow(<HeaderNav {...props}/>);
    
  });

  it('Renders without crashing', () => {
    shallow(<HeaderNav />);
  });
  
  describe('Event handlers', () => {
    
    describe('Clicking .rct-userguide-pane', () => {
      
      it('Handles responsiveBracket = [small | large] as expected', () => {
        const testCases = [
          // [responsiveBracket, addPanes, removePanes,
          //    updated currentLocation]
          ['small', ['userguide'], ['reader', 'network', 'mobileNav']],
          ['large', ['userguide'], [], 0]
        ];
        testCases.forEach(testCase => {
          props.responsiveBracket = testCase[0];
          wrapper = shallow(<HeaderNav {...props}/>);
          wrapper.find('.rct-userguide-pane').simulate('click');
          expect(props.addVisiblePanes)
            .toHaveBeenCalledWith(testCase[1]);
          expect(props.removeVisiblePanes)
            .toHaveBeenCalledWith(testCase[2]);
        });
      });
      
      it('Updates currentLocation when responsiveBracket = small', () => {
        const testCases = [
          // [responsiveBracket, update location?, updated location]
          ['small', true, 'User Guide'],
          ['large', false, null]
        ];
        testCases.forEach(testCase => {
          props.responsiveBracket = testCase[0];
          props.updateCurrentLocation = jest.fn();
          wrapper = shallow(<HeaderNav {...props}/>);
          wrapper.find('.rct-userguide-pane').simulate('click');
          if(testCase[1]) {
            expect(props.updateCurrentLocation)
              .toHaveBeenCalledWith(testCase[2]);
          } else {
            console.log(testCase[1]);
            expect(props.updateCurrentLocation)
              .toHaveBeenCalledTimes(0);
          }
        });
      });
    });
  });
});