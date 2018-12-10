import React from 'react';
import {connect} from 'react-redux';

import './HeaderNav.css';

import UserMenu from '../UserMenu';

import {addVisiblePanes, removeVisiblePanes,
        updateCurrentLocation} from '../../actions';

export function HeaderNav(props) {
  // Expected props:
  //  State:
  //    responsiveBracket: string
  //  Actions:
  //    addVisiblePanes(array)
  //    removeVisiblePanes(array)
  //    updateCurrentLocation(string)
  
  return (
    <div className="header-nav">
      <ul>
        <li>
          <i className="material-icons rct-userguide-pane"
             onClick={() => {
              // Base action on responsiveBracket
              let addPanes;
              let removePanes;
              
              if (props.responsiveBracket === 'small') {
                addPanes = ['userguide'];
                removePanes = ['reader', 'network', 'mobileNav'];
                // Update currentLocation
                props.updateCurrentLocation('User Guide');
                
              } else {
                addPanes = ['userguide'];
                removePanes = [];
              }
               props.addVisiblePanes(addPanes);
               props.removeVisiblePanes(removePanes);
             }}>help</i>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </div>
  );
  
}

const mapStateToProps = state => ({
  responsiveBracket: state.navState.responsiveBracket
});

const mapDispatchToProps = {
  addVisiblePanes,
  removeVisiblePanes,
  updateCurrentLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);