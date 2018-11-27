//  import node_modules
import React from 'react';
import classNames from 'classnames';
import { Button, Form } from 'semantic-ui-react';

// import component
import ModalWrapper from 'components/modal/ModalWrapper/ModalWrapper';

//  import styles
import styles from './SignModal.scss';

const cx = classNames.bind(styles);

const SignModal = ({
  visible,
  username,
  password,
  onConfirm,
  onCancel,
  onUsernameChange,
  onPasswordChange,
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('modalBody')}>
      <div dividing="true" className={cx('title')}>
        Sign Up
        <Button floated="right" onClick={onCancel}>
          Close
        </Button>
      </div>
      <Form>
        <div className={cx('inputForm')}>
          <Form.Field>
            <label>USERNAME</label>
            <input
              type="text"
              id="username"
              placeholder="USERNAME"
              onChange={onUsernameChange}
              value={username}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="PASSWORD"
              onChange={onPasswordChange}
              value={password}
              required
            />
          </Form.Field>
        </div>
        <div className={cx('options')}>
          <Button onClick={onConfirm} type="submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  </ModalWrapper>
);
export default SignModal;

/*

*/
