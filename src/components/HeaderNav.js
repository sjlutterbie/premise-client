import React from 'react';
import './HeaderNav.css';

export default function Header(props) {
  
  return (
    <div className="header-nav">
      <ul>
        <li>
          <i class="material-icons">help</i>
        </li>
        <li>
          <i class="material-icons">settings</i>
        </li>
      </ul>
    </div>
  );
  
}