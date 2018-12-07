import {LOAD_DEFAULT_BRANCH} from '../actions';

// DEV CODE: Create random moments to populate initial state
import faker from 'faker';

let currentBranch = [];
const momentCount = Math.floor(Math.random() * 10) + 1;
for (let i = 0; i < momentCount; i++) {
  currentBranch.push({
    id: faker.random.uuid(),
    text: faker.lorem.sentences(3)
  });
}


// Set initial state items for storyBranch elements
export const initialState = {
  
  // Current storyBranch
  currentBranch: currentBranch,
  
  // The moment on which the user may be acting, or which they have selected as
  //  their starting moment within a storyChain
  focalMoment: currentBranch[0].id,
  
  // <Moment/> mode for the focal moment
  focalMomentMode: 'read',

};

export default (state = initialState, action) => {
  
  if(action.type === LOAD_DEFAULT_BRANCH) {
    return Object.assign({}, state, {
      currentBranch: action.branch
    });
  }
  
  return state;
  
};