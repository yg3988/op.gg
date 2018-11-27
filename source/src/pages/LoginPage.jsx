import React from 'react';

import LoginContainer from 'containers/login/LoginContainer';
import SignUpModalContainer from 'containers/modal/SignUpModalContainer';

const LoginPage = () => {
  return (
    <React.Fragment>
      <LoginContainer />
      <SignUpModalContainer />
    </React.Fragment>
  );
};
export default LoginPage;
