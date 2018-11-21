import React from 'react';
import AppContents from './AppContents';
// eslint-disable-next-line
import {Grid, Segment} from 'semantic-ui-react';
import classNames from 'classnames';

//import Stylesheet
import styles from 'styles/Contents.scss';

const cx = classNames.bind(styles);

const AppContainer = () => {
    return (
        <Grid columns='equal'>
            <Grid.Column className = {cx('Appcontainer')}></Grid.Column>
            <Grid.Column width={8} className = {cx('AppContainer')}>
              <AppContents/>
            </Grid.Column>
            <Grid.Column className = {cx('Appcontainer')}></Grid.Column>
        </Grid>
    );
};

export default AppContainer;
