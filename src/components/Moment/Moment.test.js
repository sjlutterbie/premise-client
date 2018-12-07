import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';

import {Moment} from './index';

// Create DEV items

const testMomentText = faker.random.alphaNumeric(50);
  
const testMoment = {
  text: testMomentText
};

const testProps = {
  moment: testMoment,
  mode: 'read'
};

// Create object to hold shallow render
let wrapper;

describe('<Moment />', () => {
  
  it('Renders without crashing', () => {
    shallow(<Moment {...testProps}/>);
  });
  
  describe('The moment-text area', () => {

    const modes = ['read', 'actions', 'create'];

    modes.forEach(mode => {
      testProps.mode = mode;
      wrapper = shallow(<Moment {...testProps}/>);
      
      it('Exists in every mode', () => {
        expect(wrapper.find('.moment-text').length).toEqual(1);
      });
      
      it('Contains the moment text in every mode', () => {
        const textArea = wrapper.find('.moment-text');
        expect(textArea.text()).toEqual(testProps.moment.text);
      });
    });
  });

  describe('Read mode', () => {
    
    beforeEach(() => {
      testProps.mode = 'read';
      wrapper = shallow(<Moment {...testProps}/>);
    });

    it('Has one element', () => {
      expect(wrapper.find('.moment').children().length).toEqual(1);
    });

  });

  describe('Actions mode', () => {
    
    beforeEach(() => {
      testProps.mode = 'actions';
      wrapper = shallow(<Moment {...testProps}/>);
    });
    
    it('Has two buttons', () => {
      const actionArea = wrapper.find('.action-buttons');
      expect(actionArea.find('button').length).toEqual(2);
    });
    
    it('Has correctly named buttons', () => {
      const buttons = wrapper.find('button');
      expect(buttons.find('.open-create-mode').length).toEqual(1);
      expect(buttons.find('.switch-story-branch').length).toEqual(1);
    });
  });
  
  describe('Create mode', () => {
    
    let formArea;
    
    beforeEach(() => {
      testProps.mode = 'create';
      wrapper = shallow(<Moment {...testProps}/>);
      formArea = wrapper.find('form');
    });
    
    it('Has a single form', () => {
      expect(formArea.length).toEqual(1);
    });
    
    it('Has a single textarea element', () => {
      expect(formArea.find('textarea').length).toEqual(1);
    });
    
    it('Has two buttons', () => {
      expect(formArea.find('button').length).toEqual(2);
    });
    
    it('Has correctly labeled buttons', () => {
      const buttons = formArea.find('button');
      expect(buttons.find('.cancel-create-moment').length).toEqual(1);
      expect(buttons.find('.create-moment').length).toEqual(1);
    });
  });
});