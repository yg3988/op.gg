import React from 'react';
import classNames from "classnames";

//import Stylesheet
import styles from 'styles/Top.scss';

const cx = classNames.bind(styles);

const top = () => {
  return(
    <div className = {cx('top')}>
      <div className = {cx('top-contents')}>
        <div className = {cx('topnav')}>
          <div className = {cx('nav-item')}>Home</div>
          <div className = {cx('nav-item')}>Short</div>
          <div className = {cx('nav-item')}>Game</div>
        </div>
        <div className = {cx('title')}>op.gg</div>
        <div className = {cx('extra')}>
          <input type = "text"/>
          <button>검색</button>
        </div>
      </div>
    </div>
  );
};

export default top;
