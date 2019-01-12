import faker from 'faker';

import {SET_USER_MENU_VIEW, setUserMenuView,
        MONITOR_RESPONSIVE_BRACKET, monitorResponsiveBracket,
        ADD_VISIBLE_PANES, addVisiblePanes,
        REMOVE_VISIBLE_PANES, removeVisiblePanes,
        UPDATE_USER_GUIDE_PAGE, updateUserGuidePage,
        UPDATE_CURRENT_LOCATION, updateCurrentLocation,
        UPDATE_AUTH_STATUS, updateAuthStatus,
        UPDATE_LANDING_PAGE_FORM, updateLandingPageForm
} from './navActions';

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
  
  describe('updateUserGuidePage', () => {
    it('Should return the action', () => {
      const action = updateUserGuidePage();
      expect(action.type).toEqual(UPDATE_USER_GUIDE_PAGE);
    });
    
    it('Should return the correct value', () => {
      const testPage = faker.random.alphaNumeric(10);
      const action = updateUserGuidePage(testPage);
      expect(action.page).toEqual(testPage);
    });
  });
  
  describe('updateCurrentLocation', () => {
    it('Should return the action', () => {
      const action = updateCurrentLocation();
      expect(action.type).toEqual(UPDATE_CURRENT_LOCATION);
    });
    
    it('Should return the correct value', () => {
      const testLoc = faker.random.alphaNumeric(10);
      const action = updateCurrentLocation(testLoc);
      expect(action.location).toEqual(testLoc);
    });
  });
  
  describe('updateAuthorizedUser', () => {

    it('Should return the action', () => {
      const action = updateAuthStatus();
      expect(action.type).toEqual(UPDATE_AUTH_STATUS);
    });
    
    it('Should set the correct value', () => {
      const testAuth = Math.random() < .5 ? true : false;
      const action = updateAuthStatus(testAuth);
      expect(action.authStatus).toEqual(testAuth);
    });
  });
  
  describe('updateLandingPageForm', () => {
    
    it('Should return the action', () => {
      const action = updateLandingPageForm();
      expect(action.type).toEqual(UPDATE_LANDING_PAGE_FORM);
    });
    
    it('Should return the correct value', () => {
      const testForm = faker.random.alphaNumeric(10);
      const action = updateLandingPageForm(testForm);
      expect(action.form).toEqual(testForm);
    });
  });
});