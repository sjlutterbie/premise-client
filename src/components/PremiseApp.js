import React from 'react';

import Header from './Header';
import ReaderPane from './ReaderPane';
import NetworkPane from './NetworkPane';

export default function PremiseApp(props) {

  return (
    <div className="premise-app">
      <Header />
      <ReaderPane />
      <NetworkPane />
    </div>
  );
}