import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './components/Login.js';
import Favorites from './components/Favorites.js';
import Home from './components/Home.js'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Filter from './components/Filter.js';



const App = (props) => {
    
    let hist = createBrowserHistory()

    //STATE FOR STORING OUR JWT
    const [token, setToken] = React.useState(null);

    const handleLogin = async (data) => {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        setToken(result);
        window.localStorage.setItem('token', JSON.stringify(result));
    };

    const handleLogout = () => {
        //REMOVE TOKEN FROM LOCAL STORAGE
        window.localStorage.removeItem('token');
        //REMOVE TOKEN FROM STATE
        setToken(null);
        //SET HOLIDAYS TO NULL
        setHolidays(null);
    };

    return (
        <>
            <Router history={hist}>
                <div>
                <Header /* <button onClick={handleLogout}>Logout</button> */ />
                <Switch>
                    <Route path="/login" component={Login} handleSubmit={handleLogin}/>
                    <Route path="/favorites" component={Favorites}/>
                    <Route path="/" component={Home}/>
                </Switch>
                </div>
            </Router>
            
        </>
    )

}

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
