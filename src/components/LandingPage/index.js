import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './LandingPage.css';

import RegistrationForm from '../RegistrationForm';
// import LoginForm from '../LoginForm';

export function LandingPage(props) {
  
  if(props.loggedIn) {
    return <Redirect to="/premisearea" />;
  }
  
  return (
    <div className="landing-page">
      This the Landing Page!<br/>
      <div className="form-wrapper">
        <RegistrationForm />
      </div>
      <Link to="/login">Login</Link><br/>
      <Link to="/premisearea">PremiseArea</Link>
    </div>
  );
  
}

const mapStateToProps = state => ({
  loggedIn: state.userAuth.currentUser !== null
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);