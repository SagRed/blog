import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from './Title';

ReactDOM.render((
    <Router>
     <Route path="/" component={App} />   
    <Route path="/title" component={Title} />
  </Router>
 ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
