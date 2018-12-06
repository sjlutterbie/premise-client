import {createSelector} from 'reselect';

const windowWidthSelector = (state) =>
  state.navState.windowWidth;

export const getResponsiveBracket = createSelector(
  windowWidthSelector,
  (windowWidth) => {
    if (windowWidth < 600) {
      return 'mobile';
    }
    return 'desktop';
  }
);