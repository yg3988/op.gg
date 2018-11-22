//import node_modules
import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

//import Stylesheet
import styles from './Button.scss'

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({children, to, onClick, disabled, theme = 'default'}) => {
  //to 값이 존재하면 Link 사용, 그렇지 않으면 Div사용
  //비활성화되어 있는 버튼일 때 Div사용
  const Element = (to && !disabled) ? Link : Div;
  
  //비활성화하면 onClick은 실행 되지 않음
  //disalbed 값이 true가 되면 className에 disabled가 추가됨
  return(
    <Element
      to={to}
      className={cx('button',theme,{disabled})}
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  );
};

export default Button;