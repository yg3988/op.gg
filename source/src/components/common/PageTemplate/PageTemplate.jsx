//import node_modules
import React from 'react';
import classNames from 'classnames';

//import component
import Header from 'components/common/Header/Header'
import Profile from 'components/common/Profile/Profile'
//import Stylesheet
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) =>{
  return(
    <div className={cx('pageTemplate')}>
      <Header/>
      <Profile/>
      <div>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;