import React from 'react';
import {connect} from 'react-redux';

import requiresLogin from '../RequiresLogin';

import './PremiseArea.css';

// <PremiseArea /> contains the overall interface when interacting with a single
//  storyNetwork. This represents one of the core areas of the site, along with
//  <UserGuide /> and, eventually a central area for choosing storyNetworks, etc.

import ReaderPane from '../ReaderPane';
import NetworkPane from '../NetworkPane';

export function PremiseArea(props) {
  // Expected props:
  //  State elements:
  //    visiblePanes (array)
  
  return (
    <div className="premise-area">
      {props.visiblePanes.includes('network')
        ? (<div className="networkpane-wrapper rct-networkpane-wrapper">
             <NetworkPane />
           </div>)
        : (null)
      }
      {props.visiblePanes.includes('reader')
        ? (<div className="readerpane-wrapper rct-readerpane-wrapper">
             <ReaderPane />
           </div>)
        : (null)
      }
    </div>
  );

}

const mapStateToProps = state => ({
  visiblePanes: state.navState.visiblePanes
});

const mapDispatchToProps = {};

export default requiresLogin()(
  connect(mapStateToProps, mapDispatchToProps)(PremiseArea));