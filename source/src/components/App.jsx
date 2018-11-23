import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, ListPage, EditorPage } from 'pages';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/:kind?" component={LoginPage} />
      <Route path="/page" component={ListPage} />
      <Route path="/editor" component={EditorPage} />
    </Switch>
  </div>
);

export default App;
