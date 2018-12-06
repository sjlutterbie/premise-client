import { getResponsiveBracket } from './navSelectors';

describe('Navigation Selectors', () => {
  
  describe('getResponsiveBracket', () => {

    it('Returns `mobile` for width < 600', () => {
      const navState = {
        windowWidth: 599
      };
      expect(getResponsiveBracket({navState})).toEqual('mobile');
    });
    
    it('Returns `desktop` for windowWidth >= 600', () => {
      const navState = {
        windowWidth: 601
      };
      expect(getResponsiveBracket({navState})).toEqual('desktop');
    });


  });  

});