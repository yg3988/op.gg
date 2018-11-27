// import node_modules
import React from 'react';
import { Alert } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './LoginForm.scss';

const cx = classNames.bind(styles);

const LoginForm = () => (
  <div>
    <form className={cx('wrapper')}>
      <div>
        <p />
        <br />
        <input
          type="ID"
          id="ID"
          className={cx('Box')}
          placeholder="ID"
          required
        />
        <p />
        <br />
        <label htmlFor="inputPassword" />
        <input
          type="password"
          id="PASSWORD"
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
);

export default LoginForm;
