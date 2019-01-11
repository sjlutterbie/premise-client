import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, focus} from 'redux-form';

import Input from '../Input';
import {required, nonEmpty} from '../../validators';

import {registerUser, loginUser} from '../../actions';

import './RegistrationForm.css';

export function coreRegistrationForm(props) {
  
  function onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return props.registerUser(user)
      .then(() => {
        alert(`Welcome, ${username}! You will now be logged in.`);
        props.loginUser(username, password);
      });
  }

  let error;
  if (props.error) {
    error = (
      <div className="form-error" aria-live="polite">
        {props.error}
      </div>
    );
  }
  
  return (
    <form onSubmit={props.handleSubmit(values =>
                      onSubmit(values))}>
      {error}
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