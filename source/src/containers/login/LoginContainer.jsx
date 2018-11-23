import React, { Component } from 'react';
import LoginForm from 'components/login/LoginForm/LoginForm';
import { withRouter } from 'react-router-dom';
import * as baseActions from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginContainer extends Component {
  handleSignup = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('signup');
  };
  render() {
    const { handleSignup } = this;

    return <LoginForm onSignup={handleSignup} />;
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(withRouter(LoginContainer));
