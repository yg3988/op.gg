import React from 'react';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import AppContainer from './AppContainer/AppContainer';


const ContentsTemplate = () => {
  return (
    <div>
      <div>
      <ProfileContainer/>
      </div>
      <div>
      <AppContainer/>
      </div>
    </div>
  );
};

export default ContentsTemplate;
