import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from "./components/games/can-you-find-it";
import firebase from "firebase/app";
// import "firebase/realtimedatabase";

// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  apiKey: "apiKey",
  authDomain: "stag-game-of-games.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://stag-game-of-games-default-rtdb.firebaseio.com/",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
// var database = firebase.database();

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
