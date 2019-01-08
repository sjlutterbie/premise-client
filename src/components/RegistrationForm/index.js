import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';

import Input from '../Input';

import './RegistrationForm.css';

export class RegistrationForm extends React.Component {
  
  onSubmit(values) {
    console.log(values);
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="first-name">First name</label>
        <Field name="first-name" id="first-name" type="text"
               component={Input} />
        <label htmlFor="last-name">Last name</label>
        <Field name="last-name" id="last-name" type="text"
               component={Input} />
        <label htmlFor="email">Email</label>
        <Field name="email" id="email" type="email"
               component={Input} />
        <label htmlFor="username">Username</label>
        <Field name="username" id="username" type="text"
               component={Input} />
        <label htmlFor="password">Password</label>
        <Field name="password" id="passowrd" type="passowrd"
               component={Input} />
        <button type="submit"
                disabled= {this.props.pristine || this.props.submitting}
          >Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration'
})(RegistrationForm);