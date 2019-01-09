import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

import Input from '../Input';
import {required, nonEmpty} from '../../validators';

import {registerNewUser} from '../../actions';

import './RegistrationForm.css';

export function RegistrationForm(props) {
  
  return (
    <form onSubmit={props.handleSubmit(values =>
                      props.registerNewUser(values))}>
      <Field
        name="firstName"
        type="text"
        component={Input}
        label="First name"
      />
      <Field
        name="lastName"
        type="text"
        component={Input}
        label="Last name"
      />
      <Field
        name="email"
        type="email"
        component={Input}
        label="Email address"
        validate={[required, nonEmpty]}
      />
      <Field
        name="username"
        type="text"
        component={Input}
        label="Username"
        validate={[required, nonEmpty]}
      />
      <Field
        name="password"
        type="password"
        component={Input}
        label="Password"
        validate={[required, nonEmpty]}
      />
      <Field
        name="password-repeat"
        type="password-repeat"
        component={Input}
        label="Repeat password"
        validate={[required, nonEmpty]}
      />
      <button
        type="submit"
        disabled={props.pristine || props.submitting}
      >Register</button>
    </form>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  registerNewUser
};

RegistrationForm = connect(mapStateToProps,
                           mapDispatchToProps)(RegistrationForm);

export default reduxForm({
  form: 'registration'
})(RegistrationForm);