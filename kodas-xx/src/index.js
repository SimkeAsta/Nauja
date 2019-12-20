import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import DovanuListContainer from './components/Dovanos/DovanuListContainer';
import Navigacija from './components/Navigacija/Navigacija';
import DovanuAdminContainer from './components/Dovanu administravimas/DovanuAdminContainer';
import AddNewDovanaContainer from './components/Dovanu administravimas/AddNewDovanaContainer';

ReactDOM.render(
    <BrowserRouter>
        <Navigacija />
        <Route exact path="/" component={DovanuListContainer} />
        <Route exact path="/admin/" component={DovanuAdminContainer} />
        <Route exact path="/admin/add" component={AddNewDovanaContainer} />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
