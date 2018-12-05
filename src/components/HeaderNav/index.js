import React from 'react';
import './HeaderNav.css';

import UserMenu from '../UserMenu';

export default function Header(props) {
  
  return (
    <div className="header-nav">
      <ul>
        <li>
          <i className="material-icons">help</i>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </div>
  );
  
}