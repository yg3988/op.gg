import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//  import components
import LoginWrapper from 'components/login/LoginWrapper';

//  import redux_modules
import * as baseActions from 'store/modules/base';
import * as authActions from 'store/modules/auth';

class LoginContainer extends Component {
  handleSignin = () => {
    const { AuthAction } = this.props;
  };

  handleSignup = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('signup');
  };

  render() {
    const { username, password } = this.props;
    const { handleSignup } = this;

    return (
      <LoginWrapper
        username={username}
        password={password}
        onSignup={handleSignup}
      />
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(withRouter(LoginContainer));
