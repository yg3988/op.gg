import React from 'react';
import ProfileTop from './ProfileTop';
import ProfileBottom from './ProfileBottom';
import classNames from "classnames";

//import Stylesheet
import styles from "styles/Contents.scss";

const cx = classNames.bind(styles);

const ProfileContainer = () => {
  return (
    <div className = {cx('profileContainer')}>
      <div className = {cx('profileTop')}>
        <ProfileTop/>
      </div>
      <div className = {cx('profileBottom')}>
        <ProfileBottom/>
      </div>
    </div>
  );
};

export default ProfileContainer;
