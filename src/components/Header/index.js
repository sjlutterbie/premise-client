import React from 'react';
import {connect} from 'react-redux';
import './Header.css';

import HeaderNav from '../HeaderNav';
import LocationBar from '../LocationBar';

export function Header(props) {
  
  return (
    <header>
      <h1>Premise</h1>
      {props.loggedIn
        ? <div className="rct-header-wrapper"><HeaderNav /></div>
        : (null)
      }
      <LocationBar location="Location Bar"/>
    </header>
  );
  
}

const mapStateToProps = state => ({
  loggedIn: state.userAuth.user !== null,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);