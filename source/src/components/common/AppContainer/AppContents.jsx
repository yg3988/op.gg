import React from 'react';
import AppProfile from './AppProfile';
import PostList from './PostList';
import classNames from 'classnames';
import {Grid, Segment} from 'semantic-ui-react';

//import StyleSheet
import styles from 'styles/Contents.scss';

const cx = classNames.bind(styles);

const AppContents = () => {
    return (
        <Grid className = {cx('appContents')}>
            <Grid.Column width = {4} className = {cx('appProfile')}>
                <AppProfile/>
            </Grid.Column>
            <Grid.Column width = {12} className = {cx('postList')}>
                <Segment style = {{height : "47vh"}}>
                    <PostList/>
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default AppContents;