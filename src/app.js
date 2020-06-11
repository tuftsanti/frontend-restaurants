import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './components/Login.js';
import Favorites from './components/Favorites.js';
import Home from './components/Home.js'
import Header from './components/Header.js';
import Login from './components/Login.js';
import Footer from './components/Footer.js';
import Filter from './components/Filter.js';
<<<<<<< HEAD
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

    // GET the list of restaurants
    const getRestaurants = async () => {
        const response = await fetch('https://developers.zomato.com/api/v2.1/search?start=50&count=100&lat=42.361145&lon=-71.057083&radius=1000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian', {
        headers: { 
            "user-key" : "43857380d1047f74d7d7691dea96f3a5"
        }
    })
        const result = await response.json()
        // console.log(result)
        await setRestaurant(result)
    }
    //Array of Restaurants from API
    const allRestaurants = []
    restaurants ? restaurants.restaurants.filter(rest => rest.restaurant).map((restaurant) => {
        return (
            allRestaurants.push(restaurant)
        )
    })
    : ""

    // Hook to GET from API data
    React.useEffect(() => {
        // if (token) {
        getRestaurants()
        // }
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
        console.log(response)
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
=======


>>>>>>> 51d574f7b0ac02385c5c158cfb7b7bbb255533a1

const App = (props) => {
    
    let hist = createBrowserHistory()

    return (
        <>
<<<<<<< HEAD
            <Header /* <button onClick={handleLogout}>Logout</button> */ />
            <div className="App">
            <div className="App__sidebar">
                    <Filter/>
                </div>
                <div className="App__mainview">
                    <h2 className="resultTitle">Local Restaurants</h2>
                    <ul className="App__mainview--grid">
                        { restaurants ? 
                         allRestaurants.filter(rest => rest.restaurant.thumb && rest.restaurant.cuisines.includes(cuisineChoice)).map((restaurant) => {
                            return (
                                <li key={restaurant.restaurant.id} className="App__mainview--grid__individualRestaurant">
                                    <img src={restaurant.restaurant.thumb} className="App__mainview--grid__individualRestaurant--pic"/>
                                    <h3 className="App__mainview--grid__individualRestaurant--name">{restaurant.restaurant.name}</h3>
                                    <ion-icon name="add-circle-outline" onClick={()=>
                                        selectRestaurant(restaurant)}></ion-icon>
                                </li>
                            )})
                         : 
                        `Searching Your Restaurants`
                        }
                    </ul>
                </div>
            </div>
            <Login onSubmit={handleLogin}/>
        </>
    )
=======
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

>>>>>>> 51d574f7b0ac02385c5c158cfb7b7bbb255533a1
}

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
