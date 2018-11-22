//import node_modules
import React from 'react';
import classNames from 'classnames';

//import stylesheet
import Styles from './ListWrapper.scss';

const cx = classNames.bind(Styles);

const ListWrapper = ({children}) => (
    <div className={cx('listWrapper')}>
      {children}
    </div>
);

export default ListWrapper;