import React from 'react';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import AppContainer from './AppContainer/AppContainer';
import {Grid} from 'semantic-ui-react';
import classNames from 'classnames';

//import Stylesheet
import Styles from 'styles/ContentsTemplate.scss';

const cx = classNames.bind(Styles);

const ContentsTemplate = () => {
    return (
        <Grid className = {cx('contentstemplate')}>
            <Grid.Row columns={1} className = {cx('profilecontainer')}>
                <Grid.Column>
                    <ProfileContainer/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} className = {cx('appcontainer')}>
                <Grid.Column>
                    <AppContainer/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default ContentsTemplate;
/*
<div>
      <div>
      <ProfileContainer/>
      </div>
      <div>
      <AppContainer/>
      </div>
    </div>
*/