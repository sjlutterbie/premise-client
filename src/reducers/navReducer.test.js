import faker from 'faker';

import {default as navReducer, initialState} from './navReducer';
import {setUserMenuView, monitorResponsiveBracket,
        updateWindowWidth,
        addVisiblePanes, removeVisiblePanes} from '../actions';


describe('navState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = ['windowWidth','responsiveBracket',
                          'visiblePanes', 'showUserMenu'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });
  
  it('Default state elements should be the correct type', () => {
    const expectedTypes = [
      ['windowWidth', 'number'],
      ['responsiveBracket', 'string'],
      ['visiblePanes', 'object'], //Array-like object
      ['showUserMenu', 'boolean']
    ];
    expectedTypes.forEach(element => {
      expect(typeof initialState[element[0]]).toEqual(element[1]);
    });
  });
});


describe('Navigation Reducer', () => {

  describe('setUserMenuView(true)', () => {

    it('Sets showUserMenu to true', () => {
      let state = {
        showUserMenu: false
      };
      state = navReducer(state, setUserMenuView(true));
      expect(state).toEqual({
        showUserMenu: true
      });
    });
    
    it('Sets showUserMenu to false', () => {
      let state = {
        showUserMenu: true
      };
      state = navReducer(state, setUserMenuView(false));
      expect(state).toEqual({
        showUserMenu: false
      });
    });
  });

  describe('monitorResponsiveBracket', () => {
    it('Sets responsiveBracket correctly', () => {
      const testCases = [
        //[width, expected responsiveBracket]
        [599, 'small'],
        [600, 'large'] 
      ];
      testCases.forEach(testCase => {
        let state = {
          responsiveBracket: ''
        };
        state = navReducer(state, monitorResponsiveBracket(testCase[0]));
        expect(state.responsiveBracket).toEqual(testCase[1]);
      });
    });
  });



  describe('updateWindowWidth(val)', () => {
    
    it('Should set windowWidth to val', () => {
      let state = {
        windowWidth: null
      };
      let testWidth = Math.random() * 2000;
      state = navReducer(state, updateWindowWidth(testWidth));
      expect(state).toEqual({
        windowWidth: testWidth
      });
    });
  });
  
  describe('addVisiblePanes(panes)', () => {
    
    it('Should add elements to array', () => {
      let state = {
        visiblePanes: []
      };
      let newPanes = [
        faker.random.alphaNumeric(10),
        faker.random.alphaNumeric(10)
      ];
      state = navReducer(state, addVisiblePanes(newPanes));
      newPanes.forEach(pane => {
        expect(state.visiblePanes.includes(pane)).toEqual(true);
      });
    });
    
    describe('Should not create duplicate array elements', () => {
      
      it('Should not add already visible panes', () => {
        const existingPane = faker.random.alphaNumeric(10);
        let state = {
          visiblePanes: [existingPane]
        };
        let newPanes = [
          existingPane,
          faker.random.alphaNumeric(10)
        ];
        state = navReducer(state, addVisiblePanes(newPanes));
        newPanes.forEach(pane => {
          expect(state.visiblePanes.includes(pane)).toEqual(true);
        });
        expect(state.visiblePanes.length).toEqual(2);
      });
      
      it('Should prevent duplicate new panes', () => {
        const duplicatePane = faker.random.alphaNumeric(10);
        let state = {
          visiblePanes: []
        };
        let newPanes = [
          duplicatePane,
          duplicatePane,
          faker.random.alphaNumeric(10)
        ];
        state = navReducer(state, addVisiblePanes(newPanes));
        newPanes.forEach(pane => {
          expect(state.visiblePanes.includes(pane)).toEqual((true));
        });
        expect(state.visiblePanes.length).toEqual(2);
      });
    });
  });
  
  describe('removeVisiblePanes(panes)', () => {
    
    it('Should remove elements from array', () => {
      const existingPane1 = faker.random.alphaNumeric(10);
      const existingPane2 = faker.random.alphaNumeric(10);
      let state = {
        visiblePanes: [existingPane1, existingPane2] 
      };
      let removedPanes = [existingPane1, existingPane2];
      state = navReducer(state, removeVisiblePanes(removedPanes));
      expect(state.visiblePanes.length).toEqual(0);
    });
    
    
    
  });
  
});