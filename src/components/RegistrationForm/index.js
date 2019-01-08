import React from 'react';
import {connect} from 'react-redux';
import {Form, reduxForm, focus} from 'redux-form';

import './RegistrationForm.css';

export function RegistrationForm(props) {
  
  return (
    <div className="registration-form">
      This is the RegistrationForm!
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);