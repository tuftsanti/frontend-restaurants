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
import Favorites from './components/Favorites.js';
import './scss/style.scss';

const App = (props) => {
    // Hook to hold array of restaurants
    const [restaurants, setRestaurant] = React.useState(null)
    // Hook to hold array of restaurants
    const [cuisineChoice, setCuisineChoice] = React.useState(
        Filter.cuisineChoice || ''
    )
    // Hook to hold saved restaurant
    const [favRestaurant, setFavRestaurant] = React.useState({
    //     restaurant: {
    //     name: '',
    //     thumb: '',
    //     url: '',
    //     location: {
    //         address: '',
    //         locality: '',
    //         city: '',
    //         zipcode: '00000'
    //     }
    // }
    })

    // Store jwt
    const [token, setToken] = React.useState(null)

    // // Localize storage for jwt
    React.useEffect(() => {
        const checkToken = JSON.parse(window.localStorage.getItem('token'))
        if (checkToken) {
            setToken(checkToken)
        }
    }, [])


    // Hook to GET from API data
    React.useEffect(() => {
            getRestaurants()
    }, [])

    // Select Restaurant
    const selectRestaurant = async (restaurant) => {
        setFavRestaurant(restaurant)
        console.log(favRestaurant)
        pickRestaurant(favRestaurant)
    }

    // Add a Restaurant
    const pickRestaurant = async (favRestaurant) => {
        const response = await fetch(`http://localhost:3000/restaurants`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json" /*,
            Authorization: `bearer ${token}` */
            },
            body: JSON.stringify(favRestaurant)
        })
        // console.log(response)
        getRestaurants()
    }
    // Login
    const handleLogin = async (data) => {
        const response = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        const result = await response.json()
        setToken(result)
        window.localStorage.setItem('token', JSON.stringify(result))
    }
    // Logout
    const handleLogout = () => {
        window.localStorage.removeItem('token')
        setToken(null)
        setBookmark(null)
    }

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
