import React from 'react';
import './PremiseArea.css';

// <PremiseArea /> contains the overall interface when interacting with a single
//  storyNetwork. This represents one of the core areas of the site, along with
//  <UserGuide /> and, eventually a central area for choosing storyNetworks, etc.

import ReaderPane from '../ReaderPane';
import NetworkPane from '../NetworkPane';

export default function PremiseArea(props) {
  
  return (
    <div className="premise-area">
      <ReaderPane />
      <NetworkPane />
    </div>
  );

}

