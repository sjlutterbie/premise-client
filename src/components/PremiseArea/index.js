import React from 'react';
import {connect} from 'react-redux';

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
      {props.visiblePanes.includes('reader')
        ? (<div className="rct-readerpane-wrapper">
             <ReaderPane />
           </div>)
        : (null)
      }
      {props.visiblePanes.includes('network')
        ? (<div className="rct-networkpane-wrapper">
             <NetworkPane />
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

export default connect(mapStateToProps, mapDispatchToProps)(PremiseArea);