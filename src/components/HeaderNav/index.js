import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderNav.css';

import UserMenu from '../UserMenu';

export default function Header(props) {
  
  return (
    <div className="header-nav">
      <ul>
        <li>
          <Link to="/userguide"><i className="material-icons">help</i></Link>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </div>
  );
  
}