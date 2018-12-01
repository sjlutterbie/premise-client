import React from 'react';
import './Header.css';

import HeaderNav from './HeaderNav';
import LocationBar from './LocationBar';

export default function Header(props) {
  
  return (
    <header>
      <h1>Premise</h1>
      <HeaderNav />
      <LocationBar />
    </header>
  );
  
}