import React from 'react';
import AppProfile from './AppProfile';
import PostList from './PostList';
import classNames from 'classnames';

//import StyleSheet
import styles from 'styles/Contents.scss';

const cx = classNames.bind(styles);

const AppContents = () => {
    return (
        <div className = {cx('appContents')}>
            <div className = {cx('appProfile')}>
                <AppProfile/>
            </div>
            <div className = {cx('postList')}>
                <PostList/>
            </div>
        </div>
    );
};

export default AppContents;