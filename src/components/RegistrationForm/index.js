import React from 'react';
import {reduxForm, Field} from 'redux-form';

import Input from '../Input';
import {required, nonEmpty} from '../../validators';

import './RegistrationForm.css';

export class RegistrationForm extends React.Component {
  
  onSubmit(values) {
    console.log(values);
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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
          disabled={this.props.pristine || this.props.submitting}
        >Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration'
})(RegistrationForm);