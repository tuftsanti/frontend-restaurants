import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './components/Login.js';
import Favorites from './components/Favorites.js';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Filter from './components/Filter.js';

    
const App = (props) => {
    
    let hist = createBrowserHistory()

    return (
        <>
            <Router history={hist}>
                <div>
                <Header /* <button onClick={handleLogout}>Logout</button> */ />
                <Switch>
                    <Route path="/login" component={Login}>
                        
                    </Route>
                    <Route path="/favorites" component={Favorites}>
                     
                    </Route>
                    <Route path="/" component={Home}>
                        
                    </Route>
                </Switch>
                </div>
            </Router>
            
        </>
    )

}

const target = document.getElementById('app');
ReactDOM.render(<App />, target);