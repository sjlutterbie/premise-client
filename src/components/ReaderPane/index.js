import React from 'react';
import './ReaderPane.css'

// <ReaderPane /> presents the current storyChain as a series of <Moment/>
//  components.

import {default as Moment} from '../Moment';

export default function ReaderPane(props) {
  // Expected props:
  //  moments: Array of moment objects
  
  const momentComps = props.moments.map((moment, index) => {
    return (
        <Moment key={index} mode="read" moment={moment}/>
    );
  });
  
  return (
    <div className="reader">
      { momentComps.length > 0
        ? momentComps
        : <p>Whoops,something went wrong!</p>
      }
    </div>
  );

}