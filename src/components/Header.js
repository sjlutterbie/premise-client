import React from 'react';
import './Header.css';

import HeaderNav from './HeaderNav';

export default function Header(props) {
  
  return(
    <header>
      <h1>Premise</h1>
      <HeaderNav />
    </header>
  );
  
}