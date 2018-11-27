import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//  import components
import LoginWrapper from 'components/login/LoginWrapper';

//  import redux_modules
import * as baseActions from 'store/modules/base';

class LoginContainer extends Component {
  handleSignin = () => {};

  handleChange = e => {
    const { BaseActions } = this.props;
    const { id, value } = e.target;

    console.log(id);
    id === 'username'
      ? BaseActions.changeUsernameInput({
          id,
          value,
          form: 'login',
        })
      : BaseActions.changePasswordInput({
          id,
          value,
          form: 'login',
        });
  };

  handleSignup = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal('signup');
  };

  render() {
    const { username, password } = this.props;
    const { handleSignup, handleChange } = this;

    return (
      <LoginWrapper
        username={username}
        passowrd={password}
        onUsernameChange={handleChange}
        onPasswordChange={handleChange}
        onSignup={handleSignup}
      />
    );
  }
}

export default connect(
  state => ({
    form: state.base.getIn(['login', 'form']),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(withRouter(LoginContainer));
