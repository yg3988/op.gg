//import node_modules
import React from 'react';
import classNames from 'classnames';

//import stylesheet
import Styles from './Profile.scss';

const cx = classNames.bind(Styles);

const Profile = () => {
  return (
    <div className={cx('profile')}>
      <div className={cx('top')} />
      <div className={cx('bottom')} />
    </div>
  );
};

export default Profile;
