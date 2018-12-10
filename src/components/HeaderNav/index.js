import React from 'react';
import {connect} from 'react-redux';

import './HeaderNav.css';

import UserMenu from '../UserMenu';

import {addVisiblePanes, removeVisiblePanes} from '../../actions';

export function HeaderNav(props) {
  // Expected props:
  //  Actions:
  //    addVisiblePanes(array)
  //    removeVisiblePanes(array)
  
  return (
    <div className="header-nav">
      <ul>
        <li>
          <i className="material-icons rct-userguide-pane"
             onClick={() => {
               props.addVisiblePanes(['userguide']);
               props.removeVisiblePanes(['reader', 'network']);
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
  addVisiblePanes,
  removeVisiblePanes
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);