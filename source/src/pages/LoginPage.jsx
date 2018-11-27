import React from 'react';

import LoginContainer from 'containers/login/LoginContainer';
import SignModalContainer from 'containers/modal/SignModalContainer';

const LoginPage = () => {
  return (
    <React.Fragment>
      <LoginContainer />
      <SignModalContainer />
    </React.Fragment>
  );
};
export default LoginPage;
