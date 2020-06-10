import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Filter from './components/Filter.js';
import './scss/style.scss';

const App = (props) => {
    // Hook to hold array of restaurants
    const [restaurants, setRestaurant] = React.useState(null)
    // Hook to hold saved restaurant
    const [addThisRestaurant, setAddedRestaurant] = React.useState({
        name: '',
        thumb: '',
        url: '',
        location: {
            address: '',
            locality: '',
            city: '',
            zipcode: '00000'
        }
    }
    )

    // Store jwt
    // const [token, setToken] = React.useState(null)

    // Localize storage for jwt
    /* React.useEffect(() => {
        const checkToken = JSON.parse(window.localStorage.getItem('token'))
        if (checkToken) {
            setToken(checkToken)
        }
    }, [])*/

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
    
    //Filter for American restaurants
    const americanRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("American")))
    //Filter for Asian restaurants
    const asianRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Asian")))
    //Filter for Breakfast restaurants
    const breakfastRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Breakfast")))
    //Filter for Desserts restaurants
    const dessertRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Desserts")))
    //Filter for Italian restaurants
    const italianRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Italian")))
    //Filter for Mexican restaurants
    const mexicanRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Mexican")))
    //Filter for Pizza restaurants
    const pizzaRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Pizza")))
    //Filter for Seafood restaurants
    const seafoodRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Seafood")))
    //Filter for Thai restaurants
    const thaiRestaurants = (allRestaurants.filter(rest => rest.restaurant.cuisines.includes("Thai")))
    
    console.log(allRestaurants)
    console.log(americanRestaurants)
    console.log(asianRestaurants)
    console.log(breakfastRestaurants)
    console.log(dessertRestaurants)
    console.log(italianRestaurants)
    console.log(mexicanRestaurants)
    console.log(pizzaRestaurants)
    console.log(seafoodRestaurants)
    console.log(thaiRestaurants)

    // Hook to GET from API data
    React.useEffect(() => {
        // if (token) {
        getRestaurants()
        // }
    }, [])

    // Select Restaurant
    const selectRestaurant = async (restaurant) => {
        setAddedRestaurant(restaurant)
    }

    // Add a Restaurant
    const addRestaurant = async (data) => {
        const response = await fetch(`http://localhost:3000/restaurants/${data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json" /*,
            Authorization: `bearer ${token}` */
            },
            body: JSON.stringify(data)
        })
        getRestaurants()
    }
    // Login
    /* const handleLogin = async (data) => {
        const response = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        const result = await response.json()
        setToken(result)
        window.localStorage.setItem('token', JSON.stringify(result))
    }*/
    // Logout
    /* const handleLogout = () => {
        window.localStorage.removeItem('token')
        setToken(null)
        setBookmark(null)
    } */


    // Display Page
    // console.log(restaurants.restaurants[1].restaurant.thumb)
    return (
        <>
            <Header /* <button onClick={handleLogout}>Logout</button> */ />
            <div className="App">
            <div className="App__sidebar">
                    <Filter/>
                </div>
                <div className="App__mainview">
                    <h2 className="resultTitle">Local Restaurants</h2>
                    <ul className="App__mainview--grid">
                        { restaurants ? 
                        restaurants.restaurants.filter(rest => rest.restaurant.thumb).map((restaurant) => {
                            return (
                                <li key={restaurant.restaurant.id} className="App__mainview--grid__individualRestaurant">
                                    <img src={restaurant.restaurant.thumb} className="App__mainview--grid__individualRestaurant--pic"/>
                                    <h3 className="App__mainview--grid__individualRestaurant--name">{restaurant.restaurant.name}</h3>
                                    <ion-icon name="add-circle-outline"onClick={() => {
                                        selectRestaurant(restaurant)
                                    }}></ion-icon>
                                </li>
                            )})
                         : 
                        `Searching Your Restaurants`
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
const target = document.getElementById('app');
ReactDOM.render(<App />, target);