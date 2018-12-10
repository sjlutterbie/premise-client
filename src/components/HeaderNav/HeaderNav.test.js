import React from 'react';
import {shallow} from 'enzyme';

import {HeaderNav} from './index';

let props;
let wrapper;

describe('<HeaderNav />', () => {

  beforeEach(() => {
    
    props = {
      addVisiblePanes: jest.fn(),
      removeVisiblePanes: jest.fn()
    };
    
    wrapper = shallow(<HeaderNav {...props}/>);
    
  });

  it('Renders without crashing', () => {
    shallow(<HeaderNav />);
  });
  
  describe('Event handlers', () => {
    
    it('Clicking .rct-userguide-pane calls the expected actions', () => {
      wrapper.find('.rct-userguide-pane').simulate('click');
      expect(props.addVisiblePanes)
        .toHaveBeenCalledWith(['userguide']);
      expect(props.removeVisiblePanes)
        .toHaveBeenCalledWith(['reader', 'network']);
    });
  });
});