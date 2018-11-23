import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import SignModal from 'components/login/SignModal/SignModal';

class SignModalContainer extends Component {
  handleCancel = () => {};
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
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(SignModalContainer);
