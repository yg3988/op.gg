//  import node_modules
import React from 'react';
import classNames from 'classnames';
import { Alert } from 'reactstrap';
import { Divider, Button } from 'semantic-ui-react';

//  import styles
import styles from './LoginWrapper.scss';

const cx = classNames.bind(styles);

const LoginWrapper = ({ username, password, onSignup }) => {
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
              <input
                type="username"
                id="username"
                className={cx('Box')}
                placeholder="USERNAME"
                required
              />
              <p />
              <br />
              <label htmlFor="inputPassword" />
              <input
                type="password"
                id="password"
                className={cx('Box')}
                placeholder="PASSWORD"
                required
              />
              <p />
              <br />
              <div>
                <input addon type="checkbox" className={cx('check')} />
                <Alert color="light" className="me">
                  Remember Me
                </Alert>
              </div>
              <div>
                <Button color="info" size="lg" className={cx('login')}>
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
