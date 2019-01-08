import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './LandingPage.css';

export function LandingPage(props) {
  
  return (
    <div className="landing-page">
      This the Landing Page!<br/>
      <Link to="/register">Register</Link><br/>
      <Link to="/login">Login</Link><br/>
      <Link to="/premisearea">PremiseArea</Link>
    </div>
  );
  
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);