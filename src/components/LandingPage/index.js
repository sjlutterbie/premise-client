import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

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
    form = <LoginForm />;
  } else {
    form = <RegistrationForm />;
  }
  
  let formToggleLink;
  if (props.form === 'login') {
    formToggleLink = <a href="#" onClick={
                          () => props.updateLandingPageForm('registration')
                        }>Register</a>;
  } else {
    formToggleLink = <a href="#" onClick={
                          () => props.updateLandingPageForm('login')
                        }>Login</a>;
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
  loggedIn: state.userAuth.currentUser !== null,
  form: state.navState.landingPageForm
});

const mapDispatchToProps = {
  updateLandingPageForm
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);