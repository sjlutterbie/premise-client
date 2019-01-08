import React from 'react';
import {connect} from 'react-redux';

import './MobileNav.css';

import {addVisiblePanes, removeVisiblePanes} from '../../actions';

// The <MobileNav/> is a two-button floating nav menu that only apears on
//  mobile (and small tablet) displays. It allows users to toggle between the
//  <ReaderPane/> and <NetworkPane/> views.

export function MobileNav(props) {
  
  
  return (
    <div className="mobile-nav">
      <button className="rct-network-pane"
              onClick={() => {
                props.addVisiblePanes(['network']);
                props.removeVisiblePanes(['userguide', 'reader']);
              }}>Network Pane</button>
      <button className="rct-reader-pane"
              onClick={() => {
                props.addVisiblePanes(['reader']);
                props.removeVisiblePanes(['userguide', 'network']);
              }}
      >Reader Pane</button>
    </div>
  );
  
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addVisiblePanes,
  removeVisiblePanes
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);