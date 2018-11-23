//  import node_modules
import React from 'react';
import classNames from 'classnames';
import { Header, Button } from 'semantic-ui-react';

// import component
import ModalWrapper from 'components/modal/ModalWrapper/ModalWrapper';

//  import styles
import styles from './SignModal.scss';

const cx = classNames.bind(styles);

const SignModal = ({ visible, onConfirm, onCancel }) => (
  <ModalWrapper visible={visible} className={cx('modalBody')}>
    <Header as="h1" dividing className={cx('title')}>
      <p>Sign Up</p>
      <Button floated="right" onClick={onCancel}>
        Close
      </Button>
    </Header>
    <div className={cx('inputForm')}>
      <div className={cx('inputTilte')}>ID</div>
      <input type="text" name="ID" />
    </div>
    <div className={cx('inputForm')}>
      <div className={cx('inputTitle')}>PassWord</div>
      <input type="password" name="PASSWORD" />
    </div>
    <div>
      <Button onClick={onConfirm}>Sign Up</Button>
    </div>
  </ModalWrapper>
);
export default SignModal;
