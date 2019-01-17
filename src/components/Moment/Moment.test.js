import React from 'react';
import {shallow} from 'enzyme';
import faker from 'faker';

import {Moment, handleMomentTextClick} from './index';

// Create DEV items

const testMomentText = faker.random.alphaNumeric(50);
  
const testMoment = {
  content: testMomentText,
  id: faker.random.alphaNumeric(10)
};

const handleMomentTextClick_test = jest.fn();
const updateFocalMomentMode_test = jest.fn();

const testProps = {
  moment: testMoment,
  mode: 'read',
  handleMomentTextClick: handleMomentTextClick_test,
  updateFocalMomentMode: updateFocalMomentMode_test 
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
        expect(textArea.text()).toEqual(testProps.moment.content);
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
    
    describe('Event handling', () => {
    
      it('Clicking on moment-text calls handleMomentTextClick', () => {
        wrapper = shallow(<Moment {...testProps}/>);
        wrapper.find('.moment-text').simulate('click');
        expect(handleMomentTextClick_test)
          .toHaveBeenCalledWith(testProps.moment.id);
      });
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
    
    describe('Event handling', () => {
      
      it('Clicking `Create` button calls the correct action', () => {
        testProps.mode = 'actions';
        const wrapper = shallow(<Moment {...testProps}/>);
        wrapper.find('.open-create-mode').simulate('click');
        expect(updateFocalMomentMode_test)
          .toHaveBeenCalledWith('create');
      });
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
    
    describe('Event handling', () => {
      
      it('Clicking `Cancel` returns to `actions` mode', () => {
        testProps.mode = 'create';
        const wrapper = shallow(<Moment {...testProps}/>);
        wrapper.find('.cancel-create-moment').simulate('click');
        expect(updateFocalMomentMode_test)
          .toHaveBeenCalledWith('actions');
      });
      
    });
    
    
    
  });
  
});
