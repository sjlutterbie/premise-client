import faker from 'faker';

import {SET_USER_MENU_VIEW, setUserMenuView,
        MONITOR_RESPONSIVE_BRACKET, monitorResponsiveBracket,
        ADD_VISIBLE_PANES, addVisiblePanes,
        REMOVE_VISIBLE_PANES, removeVisiblePanes} from './navActions';

describe('Navigation Actions', () => {
  
  describe('setUserMenuView', () => {

    it('Should return the action', () => {
      const action = setUserMenuView();
      expect(action.type).toEqual(SET_USER_MENU_VIEW);
    });
    
    it('Should return the correct value', () => {
      const bool = Math.random() > .5 ? true : false;
      const action = setUserMenuView(bool);
      expect(action.visible).toEqual(bool);
    });
  });
  
  describe('monitorResponsiveBracket', () => {

    it('Should return the action', () => {
      const action = monitorResponsiveBracket();
      expect(action.type).toEqual(MONITOR_RESPONSIVE_BRACKET);
    });
    
    it('Should return the correct value', () => {
      const testWidth = Math.random() * 2000;
      const action = monitorResponsiveBracket(testWidth);
      expect(action.width).toEqual(testWidth);
    });

  });
  
  describe('addVisiblePanes', () => {

    it('Should return the action', () => {
      const action = addVisiblePanes();
      expect(action.type).toEqual(ADD_VISIBLE_PANES);
    });
    
    it('Should return the correct value', () => {
      const testPanes = [faker.random.alphaNumeric(10)];
      const action = addVisiblePanes(testPanes);
      expect(action.panes).toEqual(testPanes);
    });
  });
  
  describe('removeVisiblePanes', () => {

    it('Should return the action', () => {
      const action = removeVisiblePanes();
      expect(action.type).toEqual(REMOVE_VISIBLE_PANES);
    });
    
    it('Should return the correct value', () => {
      const testPanes = [faker.random.alphaNumeric(10)];
      const action = removeVisiblePanes(testPanes);
      expect(action.panes).toEqual(testPanes);
    });

  });
  
});