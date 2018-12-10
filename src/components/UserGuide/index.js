import React from 'react';
import {connect} from 'react-redux';

import './UserGuide.css';

import {userGuideData} from './UserGuideData';

import {addVisiblePanes, removeVisiblePanes,
        updateUserGuidePage, updateCurrentLocation} from '../../actions';

// <UserGuide /> is a 'routable' area of the site, that includes the
//  introductory slideshow and, eventually, other tools, such as an FAQ.

export function UserGuide(props) {
  // Expected props:
  //  State:
  //    responsiveBracket: string
  //  Actions:
  //    addVisiblePanes(array)
  //    removeVisiblePanes(array)
  //    updateUserGuidePage(string)
  //    updateCurrentLocation(string)
  //  Other:
  //    userGuideData: Custom JSON object
  
  return (
    <div className="user-guide">
      <button className="rct-exit-userguide"
              onClick={() => {
                // Handle based on responsive bracket
                let removePanes = ['userguide'];
                let addPanes = [];
                if(props.responsiveBracket === 'small') {
                  addPanes = ['reader'];
                }
                props.addVisiblePanes(addPanes);
                props.removeVisiblePanes(removePanes);
                props.updateCurrentLocation('TEMP VALUE') // DEV: Will update with real data
              }}>Return to App</button>
      <div className="userguide-content-area">
        {props.userGuideData[props.userGuidePage].content}
      </div>
      <div className="userguide-nav-buttons">
        {props.userGuideData[props.userGuidePage].prev
          ? (<button className="rct-userguide-prev"
                     onClick={(page) => {props
                        .updateUserGuidePage(
                            props.userGuideData[props.userGuidePage].prev)}}
          >Previous</button>)
          : (null)
        }
        {props.userGuideData[props.userGuidePage].next
          ? <button className="rct-userguide-next"
                    onClick={(page) => {props
                        .updateUserGuidePage(
                            props.userGuideData[props.userGuidePage].next)}}
          >Next</button>
          : (null)
        }
      </div>
    </div>
  );
  
}

export const mapStateToProps = state => ({
  responsiveBracket: state.navState.responsiveBracket,
  userGuidePage: state.navState.userGuidePage,
  userGuideData
});

export const mapDispatchToProps = {
  addVisiblePanes,
  removeVisiblePanes,
  updateUserGuidePage,
  updateCurrentLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(UserGuide);