import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Favorites from './components/Favorites.js';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import UserContext from './context/UserContext';
import Axios from 'axios';
import {BrowserRouter} from 'react-router-dom';

    
const App = (props) => {
    
    let hist = createBrowserHistory()

    //STATE FOR STORING OUR JWT
    const [token, setToken] = React.useState(null);

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    })

    useEffect (() => {
        const isLoggedIn = async () => {
            let token = localStorage.getItem('auth-token')
            if (token === null) {
                localStorage.setItem("auth-token", '');
                token = '';
            }
            const tokenResponse = await Axios.post("http://localhost:3000/users/validToken", null, {headers: {"x-auth-token": token}})
            if (tokenResponse.data) {
                const userResponse = await Axios.get('http://localhost:3000/users/', {headers: {'x-auth-token': token}})
                setUserData({
                    token,
                    user: userResponse.data
                })
            }
        }
        isLoggedIn();
    }, [])

    return (
        <>
            <BrowserRouter history={hist}>
                <UserContext.Provider value={{userData, setUserData}}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/favorites" component={Favorites}/>
                    </Switch>
                </UserContext.Provider>
            </BrowserRouter>
            
        </>
    )

}

const target = document.getElementById('app');
ReactDOM.render(<App />, target);