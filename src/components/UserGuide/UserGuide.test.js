import React from 'react';
import {shallow} from 'enzyme';

import {UserGuide} from './index';


let props = {
  responsiveBracket: 'small',
  addVisiblePanes: jest.fn(),
  removeVisiblePanes: jest.fn()
};
let wrapper;

describe('<UserGuide />', () => {
  
  beforeEach(() => {
    wrapper = shallow(<UserGuide {...props}/>);
  });
  
  it('Renders without crashing', () => {
    shallow(<UserGuide />);
  });
  
  it('Has the correct structure', () => {
    expect(wrapper.find('button.rct-exit-userguide').length).toEqual(1);
    expect(wrapper.find('.userguide-content-area').length).toEqual(1);
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
      });
    });
  });
});