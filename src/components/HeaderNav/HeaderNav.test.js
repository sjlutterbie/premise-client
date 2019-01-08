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
    
    describe('Clicking .rct-show-userguide', () => {
      
      it('Should load the userguide', () => {
        wrapper = shallow(<HeaderNav {...props}/>);
        wrapper.find('.rct-show-userguide').simulate('click');
        expect(props.addVisiblePanes)
          .toHaveBeenCalledWith(['userguide']);
      });
    });
  });
});