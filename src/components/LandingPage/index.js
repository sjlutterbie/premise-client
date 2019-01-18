import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {updateLandingPageForm} from '../../actions';

import './LandingPage.css';

import RegistrationForm from '../RegistrationForm';
import LoginForm from '../LoginForm';

export function LandingPage(props) {
  
  if(props.loggedIn) {
    return <Redirect to="/premisearea" />;
  }
  
  let form;
  if (props.form === 'login') {
    form = 
      <div className='rct-login-form-wrapper'>
        <LoginForm />
      </div>;
  } else {
    form = 
    <div className='rct-registration-form-wrapper'>
      <RegistrationForm />
    </div>;
  }
  
  let formToggleLink;
  if (props.form === 'login') {
    formToggleLink =
      <button className="rct-form-toggle-link" href="#"
         onClick={() => props.updateLandingPageForm('registration')}>
      Register</button>;
  } else {
    formToggleLink =
      <button className="rct-form-toggle-link" href="#"
         onClick={() => props.updateLandingPageForm('login')}>
      Login</button>;
  }
  return (
    <div className="landing-page">
      This the Landing Page!<br/>
      <div className="form-wrapper">
        {form}
      </div>
      {formToggleLink}<br/>
    </div>
  );
  
}

const mapStateToProps = state => ({
  loggedIn: state.userAuth.user !== null,
  form: state.navState.landingPageForm
});

const mapDispatchToProps = {
  updateLandingPageForm
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);