import React from 'react';
import classNames from 'classnames';

import styles from './InputForm.scss';

const cx = classNames.bind(styles);

const InputForm = ({ ...rest }) => (
  <div className={cx('inputform')}>
    <input className={cx('box')} {...rest} />
  </div>
);

export default InputForm;
