import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {PremiseApp} from './PremiseApp';

describe('<PremiseApp />', () => {
  
  it('Renders without crashing', () => {
    const props = {
      updateWindowWidth: jest.fn()
    };
    shallow(<PremiseApp {...props}/>);
  });
  
  describe('ComponentDidMount', () => {
    
    let updateWindowWidth;
    let props;
    
    beforeEach(() => {
      updateWindowWidth = jest.fn();
      props = {updateWindowWidth};
    })
    
    it('Calls the lifecycle method', ()=> {
      jest.spyOn(PremiseApp.prototype, 'componentDidMount');
      const wrapper = shallow(<PremiseApp {...props}/>);
      expect(PremiseApp.prototype.componentDidMount.mock.calls.length).toBe(1)
    });
    
    it('Calls the correct methods', () => {
      const wrapper = shallow(<PremiseApp {...props}/>);
      expect(updateWindowWidth).toHaveBeenCalled();
    });

  });
  
});