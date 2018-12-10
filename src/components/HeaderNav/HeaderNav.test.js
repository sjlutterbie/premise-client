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
          // [responsiveBracket, addPanes, removePanes]
          ['small', ['userguide'], ['reader', 'network', 'mobileNav']],
          ['large', ['userguide'], []]
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
    });
  });
});