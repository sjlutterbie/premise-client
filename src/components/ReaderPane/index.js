import React from 'react';
import {connect} from 'react-redux';

import './ReaderPane.css';


// <ReaderPane /> presents the current storyChain as a series of <Moment/>
//  components.

import {default as Moment} from '../Moment';

export function ReaderPane(props) {
  // Expected props:
  //  moments: Array of moment objects
  
  const momentComps = props.moments.map((moment, index) => {
    
    return (
        <Moment key={index}
                mode={moment.id === props.focalMoment
                      ? props.focalMomentMode : 'read'}
                moment={moment}/>
    );
  });
  
  return (
    <div className="reader-pane">
      { momentComps.length > 0
        ? momentComps
        : <p>Loading...</p>
      }
    </div>
  );

}

const mapStateToProps = state => ({
  moments: state.storyBranch.currentBranch,
  focalMoment: state.storyBranch.focalMoment,
  focalMomentMode: state.storyBranch.focalMomentMode
});

export default connect(mapStateToProps)(ReaderPane);