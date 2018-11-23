import React, { Component } from 'react';
import LoginForm from 'components/login/LoginForm/LoginForm';
import { withRouter } from 'react-router-dom';
import * as baseAction from 'store/modules/base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class LoginContainer extends Component {
  handleSignup = () => {
    const { baseAction } = this.props;
    baseAction.showModal('signup');
  };

  render() {
    const { handleSignup } = this;

    return <LoginForm onSignup={handleSignup} />;
  }
}

export default connect(
  state => ({}),
  dispatch =>
    ({
      BaseAction: bindActionCreators(baseAction, dispatch),
    }(withRouter(LoginContainer))),
);
