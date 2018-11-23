//  import node_modules
import React from 'react';
import classNames from 'classnames';

//  import container
import SignModalContainer from 'containers/modal/SignModalContainer';
//  import component
import LoginContainer from 'containers/login/LoginContainer';

//  import styles
import styles from './LoginWrapper.scss';

const cx = classNames.bind(styles);

const LoginWrapper = () => {
  return (
    <div>
      <main className={cx('signWrapper')}>
        <div className={cx('title')}>
          <p>CS.GG MK2</p>
        </div>
        <div className={cx('formWrapper')}>
          <section>
            <LoginContainer />
          </section>
        </div>
      </main>
      <SignModalContainer />
    </div>
  );
};

export default LoginWrapper;
