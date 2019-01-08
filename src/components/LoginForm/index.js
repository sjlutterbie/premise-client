import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

import Input from '../Input';
import {required, nonEmpty} from '../../validators';

import {registerNewUser} from '../../actions';

import './LoginForm.css';

export function LoginForm(props) {
  
 return (
    <form onSubmit={props.handleSubmit(values => props.onSubmit(values))}>
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
      >Log In</button>
    </form>
  );
  
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onSubmit: registerNewUser
};

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);


export default reduxForm({
  form: 'login'
})(LoginForm);