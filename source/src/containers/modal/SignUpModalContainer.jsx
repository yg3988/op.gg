//  import node_modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';

//  import redux_modules
import * as baseActions from 'store/modules/base';

//  import component
import SignModal from 'components/login/SignModal/SignModal';

class SignUpModalContainer extends Component {
  checkUsernameExists = debounce(async username => {
    const { BaseActions } = this.props;
    console.log(this.props);
    await BaseActions.checkUsernameExist(username);
    if (!this.props.exist) {
      BaseActions.setError('중복');
    } else {
      BaseActions.setError('null');
    }
  }, 300);

  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signup');
  };

  handleConfirm = async () => {
    const { BaseActions, exist, form, history } = this.props;
    const { username, password } = form.toJS();

    console.log('before', exist);
    if (exist) return;
    console.log('After');
    /*
    await BaseActions.register({
      username,
      password,
    });
    */
    BaseActions.hideModal('signup');
  };

  handleChange = e => {
    const { BaseActions } = this.props;
    const { id, value } = e.target;

    console.log(id);
    id === 'username'
      ? BaseActions.changeUsernameInput({
          id,
          value,
          form: 'register',
        })
      : BaseActions.changePasswordInput({
          id,
          value,
          form: 'register',
        });

    id === 'username' && this.checkUsernameExists(value);
  };

  render() {
    const { visible, username, password } = this.props;
    const { handleCancel, handleConfirm, handleChange } = this;
    return (
      <SignModal
        visible={visible}
        username={username}
        password={password}
        onUsernameChange={handleChange}
        onPasswordChange={handleChange}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'signup']),
    form: state.base.getIn(['register', 'form']),
    error: state.base.getIn(['register', 'error']),
    exist: state.base.getIn(['register', 'exist']),
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(SignUpModalContainer);
