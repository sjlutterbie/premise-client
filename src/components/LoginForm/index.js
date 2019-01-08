import React from 'react';
import {connect} from 'react-redux';

import './LoginForm.css';

import {updateAuthStatus} from '../../actions';



export function LoginForm(props) {
  return (
    <div className="login-form">Hello, world!</div>
  );
}

const mapStateToProps = state => ({
  authStatus: state.navState.authStatus
});

const mapDispatchToProps = {
  updateAuthStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);