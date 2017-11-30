import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';

import Home from './components/Home'
import Add from './components/Add';
import Search from './components/Search';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div className="hero is-primary">
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/add' component={Add}/>
                <Route exact path='/search' component={Search}/>
                </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
