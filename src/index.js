import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';

import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className="hero is-primary">
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
