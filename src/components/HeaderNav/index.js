import React from 'react';
import {connect} from 'react-redux';

import './HeaderNav.css';

import UserMenu from '../UserMenu';

import {addVisiblePanes} from '../../actions';

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
          <i className="material-icons rct-show-userguide"
             onClick={() => {
              props.addVisiblePanes(['userguide']);
             }}>help</i>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addVisiblePanes
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);