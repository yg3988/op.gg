//import node_modules
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

//import components
import Button from '../Button/Button';

//import Stylesheet
import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('headerContent')}>
        <div className={cx('headerNav')}>
          <Button theme="outline" to="/">
            Home
          </Button>
          <Button theme="outline" to="/">
            Detail
          </Button>
          <Button theme="outline" to="/">
            Game
          </Button>
        </div>
        <div className={cx('brand')}>
          <Link to="/">CS.GG MK2.</Link>
        </div>
        <div className={cx('right')}>오른쪽</div>
      </div>
    </header>
  );
};

export default Header;
