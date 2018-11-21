//modules
import React from 'react';
import Top from './Top';
import ContentsTemplate from './common/ContentsTemplate';
// eslint-disable-next-line
import {Grid, GridColumn} from 'semantic-ui-react';
import classNames from 'classnames';

//import Stylesheet
import styles from 'styles/Base.scss';

const cx = classNames.bind(styles);

const App = () => {
    return (
        <Grid divided='vertically' className = {cx('pagetemplate')}>
            <Grid.Row columns={1} className = {cx('top')}>
                <Grid.Column>
                    <Top/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} className = {cx('contentstemplate')}>
                <Grid.Column>
                    <ContentsTemplate/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default App;
