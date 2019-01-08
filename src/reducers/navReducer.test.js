import faker from 'faker';

import {default as navReducer, initialState} from './navReducer';
import {setUserMenuView, monitorResponsiveBracket,
        addVisiblePanes, removeVisiblePanes,
        updateUserGuidePage, updateCurrentLocation,
        updateAuthStatus} from '../actions';


describe('navState', () => {
  
  it('Should contain the expected defaults', () => {
    const expectedKeys = ['authStatus', 'responsiveBracket','visiblePanes',
                          'currentLocation', 'userGuidePage','showUserMenu'];
    expect(Object.keys(initialState)).toEqual(expectedKeys);
  });
  
  it('Default state elements should be the correct type', () => {
    const expectedTypes = [
      ['authStatus', 'boolean'],
      ['responsiveBracket', 'string'],
      ['visiblePanes', 'object'], //Array-like object
      ['currentLocation', 'string'],
      ['userGuidePage', 'string'],
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
    
    it('Handles bracket changes correctly', () => {
      const testCases = [
        // [initialBracket,initialVisiblePanes,newWidth,expectedVisiblePanes]
        // small -> large, userguide visible
        ['small', ['userguide'], 601, ['reader', 'network', 'userguide']],
        // small -> large, userguide hidden
        ['small', [''], 601, ['reader', 'network']],
        // large -> small, userguide visible
        ['large', ['userguide'], 599, ['userguide']],
        // large -> small, userguide hidden
        ['large', [''], 599, ['reader', 'mobileNav']],
        // small, no change
        ['small', ['asdf'], 599, ['asdf']],
        ['large', ['sdfg'], 601, ['sdfg']]
      ];
      testCases.forEach(testCase => {
        let state = {
          responsiveBracket: testCase[0],
          visiblePanes: testCase[1]
        };
        state=navReducer(state, monitorResponsiveBracket(testCase[2]));
        expect(state.visiblePanes).toEqual(testCase[3]);
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
  
  describe('updateUserGuidePage(page)', () => {
    
    it('Should update userGuidePage correctly', () => {
      let state = {
        userGuidePage: ''
      };
      const testPage = faker.random.alphaNumeric(10);
      state = navReducer(state, updateUserGuidePage(testPage));
      expect(state.userGuidePage).toEqual(testPage);
    });
  });
  
  describe('updateCurrentLocation(page)', () => {
    
    it('Should update currentLocation correctly', () => {
      let state = {
        currentLocation: 'foo'
      };
      const testLoc = faker.random.alphaNumeric(10);
      state = navReducer(state, updateCurrentLocation(testLoc));
      expect(state.currentLocation).toEqual(testLoc);
    });
  });
  
  describe('updateAuthorizedUser(authStatus)', () => {
    
    it('Sets authorizedUser to true', () => {
      let state = {
        authStatus: false
      };
      const testAuth = true;
      state = navReducer(state, updateAuthStatus(testAuth));
      expect(state.authStatus).toEqual(testAuth);
    });
    
    it('Sets authorizedUser to false', () => {
      let state = {
        authStatus: true
      };
      const testAuth = false;
      state = navReducer(state, updateAuthStatus(testAuth));
      expect(state.authStatus).toEqual(testAuth);
    });
    
  });
  
});