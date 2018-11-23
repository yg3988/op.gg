//  import node_modules
import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseAction from 'store/modules/base';

//  import container
// import LoginContainer from 'containers/login/LoginContainer';

//  import component
import LoginForm from './LoginForm/LoginForm';

//  import styles
import styles from './LoginWrapper.scss';

const cx = classNames.bind(styles);

const LoginWrapper = () => {
  return (
    <main className={cx('signWrapper')}>
      <div className={cx('title')}>
        <p>CS.GG MK2</p>
      </div>
      <div className={cx('formWrapper')}>
        <section>
          <LoginForm />
        </section>
      </div>
    </main>
  );
};

export default LoginWrapper;
