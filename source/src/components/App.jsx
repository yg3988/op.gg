import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, ListPage, EditorPage } from 'pages';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={ListPage} />
      <Route path="/editor" component={EditorPage} />
    </Switch>
  </div>
);

export default App;
