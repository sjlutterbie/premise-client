import React from 'react';
import {shallow} from 'enzyme';

import {MobileNav, loadNetworkView, loadReaderView} from './index';

// Declare/create testing variables/objects
let wrapper;
let props;

describe('<MobileNav/>', () => {
  
  beforeEach(() => {
    props = {
      addVisiblePanes: jest.fn(),
      removeVisiblePanes: jest.fn()
    };
    wrapper = shallow(<MobileNav {...props}/>);
  });
  
  it('Renders without crashing', () => {
    shallow(<MobileNav />);
  });
  
  it('Consists of two buttons', () => {
    const buttons = wrapper.find('button');
    expect(buttons.length).toEqual(2);
  });
  
  it('Butons are correctly identified', () => {
    const buttons = wrapper.find('button');
    expect(buttons.find('.rct-network-pane').length).toEqual(1);
    expect(buttons.find('.rct-reader-pane').length).toEqual(1);
  });
  
  describe('Event handlers', () => {
    
    it('Clicking .rct-network-pane calls the expected actions', () => {
      wrapper.find('.rct-network-pane').simulate('click');
      expect(props.addVisiblePanes)
        .toHaveBeenCalledWith(['network']);
      expect(props.removeVisiblePanes)
        .toHaveBeenCalledWith(['userguide', 'reader']);
    });
    
    it('Clicking .rct-reader-pans calls the expected actions', () => {
      wrapper.find('.rct-reader-pane').simulate('click');
      expect(props.addVisiblePanes)
        .toHaveBeenCalledWith(['reader']);
      expect(props.removeVisiblePanes)
        .toHaveBeenCalledWith(['userguide', 'network']);
    });
  });
});
