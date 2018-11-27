//  import node_modules
import React from 'react';
import classNames from 'classnames';
import { Alert } from 'reactstrap';
import { Divider, Button } from 'semantic-ui-react';

//  import components
import InputForm from './InputForm/InputForm';
//  import styles
import styles from './LoginWrapper.scss';

const cx = classNames.bind(styles);

const LoginWrapper = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSignup,
}) => {
  return (
    <div className={cx('loginWrapper')}>
      <div className={cx('title')}>
        <p>CS.GG MK2</p>
      </div>
      <div className={cx('formWrapper')}>
        <div>
          <form className={cx('wrapper')}>
            <div>
              <p />
              <br />
              <InputForm
                type="username"
                id="username"
                className={cx('Box')}
                placeholder="USERNAME"
                onChange={onUsernameChange}
                value={username}
                required
              />
              <p />
              <br />
              <InputForm
                type="password"
                id="password"
                className={cx('Box')}
                placeholder="PASSWORD"
                onChange={onPasswordChange}
                value={password}
                required
              />
              <p />
              <br />
              <div>
                <input addon="true" type="checkbox" className={cx('check')} />
                <Alert color="light" className="me">
                  Remember Me
                </Alert>
              </div>
              <div>
                <Button size="large" className={cx('login')}>
                  Sign In
                </Button>
              </div>
            </div>
          </form>
        </div>
        <Divider horizontal>OR</Divider>
        <div className={cx('signup')}>
          <Button
            key="signup"
            secondary
            className={cx('signupButton')}
            onClick={onSignup}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div />
    </div>
  );
};

export default LoginWrapper;
