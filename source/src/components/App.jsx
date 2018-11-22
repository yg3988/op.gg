import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ListPage, EditorPage} from 'pages';

const App = () =>{
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route path="/editor" component={EditorPage}/>
      </Switch>
    </div>
  );
};

export default App;