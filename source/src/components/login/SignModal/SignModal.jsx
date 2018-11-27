//  import node_modules
import React from 'react';
import classNames from 'classnames';
import { Button, Form } from 'semantic-ui-react';

// import component
import ModalWrapper from 'components/modal/ModalWrapper/ModalWrapper';

//  import styles
import styles from './SignModal.scss';

const cx = classNames.bind(styles);

const SignModal = ({ visible, onConfirm, onCancel }) => (
  <ModalWrapper visible={visible}>
    <div className={cx('modalBody')}>
      <div dividing className={cx('title')}>
        Sign Up
        <Button floated="right" onClick={onCancel}>
          Close
        </Button>
      </div>
      <Form className={cx('inputForm')}>
        <Form.Field>
          <label>USERNAME</label>
          <input type="text" name="ID" placeholder="USERNAME" />
        </Form.Field>
        <Form.Field>
          <label>PASSWORD</label>
          <input type="text" name="ID" placeholder="PASSWORD" />
        </Form.Field>
      </Form>
      <div className={cx('options')}>
        <Button onClick={onConfirm} type="submit">
          Sign Up
        </Button>
      </div>
    </div>
  </ModalWrapper>
);
export default SignModal;

/*

*/
