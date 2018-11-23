import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './ModalWrapper.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prefer-stateless-function
class ModalWrapper extends Component {
  render() {
    const { children, visible } = this.props;

    if (!visible) return null;

    return (
      <div className={cx('backgroundAlpha')}>
        <div className={cx('modalWrapper')}>
          <div className={cx('modal1')}>{children}</div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;
