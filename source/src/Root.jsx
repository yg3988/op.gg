import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';

const Root = () =>{
  return (
    <BrowserRouter>
      <App style={{height: 'inherit'}}/>
    </BrowserRouter>
  );
};

export default Root;
