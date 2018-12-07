import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

import HeaderNav from '../HeaderNav';
import LocationBar from '../LocationBar';

export default function Header(props) {
  
  return (
    <header>
      <Link to="/premise"><h1>Premise</h1></Link>
      <HeaderNav />
      <LocationBar location="Location Bar"/>
    </header>
  );
  
}