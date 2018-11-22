//import node_modules
import React from 'react';
import classNames from 'classnames';
//import {Link} from 'react-router-dom'; import stylesheet
import styles from './PostList.scss';

const cx = classNames.bind(styles);

const PostItem = () => {
    const defaultProps = {
        user: 'user.name'
    }

    return (
        <div className={cx('postItem')}>
            <h3>{defaultProps.user}</h3>
            <div className={cx('date')}>yyyy-mm-dd</div>
            <p>contents</p>
            <div className={cx('tags')}>
                <p> #태그 </p>
            </div>
        </div>
    );
};

const PostList = () => (
    <div className={cx('postList')}>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
);

export default PostList;