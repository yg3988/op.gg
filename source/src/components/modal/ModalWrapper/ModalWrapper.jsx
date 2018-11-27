import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './ModalWrapper.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prefer-stateless-function
class ModalWrapper extends Component {
  state = {
    animate: false,
  };

  startAnimation = () => {
    this.setState({
      animate: true,
    });

    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, 250);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible) {
      this.startAnimation();
    }
  }

  render() {
    const { children, visible } = this.props;
    const { animate } = this.state;

    if (!visible && !animate) return null;

    const animation = animate && (visible ? 'enter' : 'leave');

    return (
      <div>
        <div className={cx('backgroundAlpha', animation)} />
        <div className={cx('modalWrapper')}>
          <div className={cx('modalBox', animation)}>{children}</div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;

/*
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
*/
