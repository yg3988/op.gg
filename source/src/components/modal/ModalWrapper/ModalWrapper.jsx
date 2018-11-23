import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './ModalWrapper.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prefer-stateless-function
class ModalWrapper extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children, visible } = this.props;

    if (!visible) return null;

    return (
      <div className={cx('backgroundAlpha')}>
        <div className={cx('modalWrapper')}>
          <div className={cx('modal')}>{children}</div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;
