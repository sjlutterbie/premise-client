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
  moment: testMoment
};

// Create object to hold shallow render
let wrapper;

describe('<Moment />', () => {
  
  // Build the <Moment/> component before each test
  beforeEach(() => {
    wrapper = shallow(<Moment {...testProps}/>);
  });
  
  it('Renders without crashing', () => {
    shallow(<Moment {...testProps}/>);
  });
  
  it('Has three primary components', () => {
    expect(wrapper.children().length).toEqual(3);
  });
  
  describe('.moment-text area', () => {
    it('Renders momentText in the correct place', () => {
      const textArea = wrapper.find('.moment-text');
      expect(textArea.text()).toEqual(testProps.moment.text);
    });    
  });
  
  describe('.action-buttons area', () => {
    
    it('Has two buttons', () => {
      const actionArea = wrapper.find('.action-buttons');
      expect(actionArea.find('button').length).toEqual(2);
    });
    
    it('Has correctly named buttons', () => {
      const actionArea = wrapper.find('.action-buttons');
      const buttons = actionArea.find('button');
      expect(buttons.find('.open-create-mode').length).toEqual(1);
      expect(buttons.find('.switch-story-branch').length).toEqual(1);
    });
    
  });
  
  describe('Create moment form', () => {
    
    let formArea;
    
    beforeEach(() => {
      formArea = wrapper.find('form');
    });
    
    it('Exists', () => {
      expect(wrapper.find('form').length).toEqual(1);
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