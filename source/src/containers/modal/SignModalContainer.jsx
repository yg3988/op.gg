import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseAction from 'store/modules/base';
import SignModal from 'components/login/SignModal/SignModal';

class SignModalContainer extends Component {
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('remove');
  };
  handleConfirm = () => {};
  render() {
    const { visible } = this.props;
    const { handleCancel, handleConfirm } = this;

    return (
      <SignModal
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'signup']),
  }),
  dispatch => ({
    BaseAction: bindActionCreators(baseAction, dispatch),
  }),
)(SignModalContainer);
