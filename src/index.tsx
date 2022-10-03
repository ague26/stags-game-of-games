import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from "./components/games/can-you-find-it";

ReactDOM.render(
  
  (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/can-you-find-it" component={Game}/>
      {/* <Route path="/contact-us" component={ContactUs}/> */}
    </Switch>
  </BrowserRouter>)
  ,document.getElementById('root')
);
