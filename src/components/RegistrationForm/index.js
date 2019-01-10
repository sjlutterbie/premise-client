import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, focus} from 'redux-form';

import Input from '../Input';
import {required, nonEmpty} from '../../validators';

import {registerUser, loginUser} from '../../actions';

import './RegistrationForm.css';

export function coreRegistrationForm(props) {
  
  function onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return props.registerUser(user)
      .then(() => props.loginUser(username, password));
  }
  
  return (
    <form onSubmit={props.handleSubmit(values =>
                      onSubmit(values))}>
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
  registerUser,
  loginUser
};

let RegistrationForm = connect(mapStateToProps,
                           mapDispatchToProps)(coreRegistrationForm);

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);