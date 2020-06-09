import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './scss/style.scss';

const App = (props) => {
    // Hook to hold array of restaurants
    const [restaurants, setRestaurant] = React.useState(null)
    // Hook to hold edited restaurant
    const [editThisRestaurant, setEditedRestaurant] = React.useState({
        name: '',
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
        console.log(result)
        await setRestaurant(result)
    }

    // Hook to GET from API data
    React.useEffect(() => {
        // if (token) {
        getRestaurants()
        // }
    }, [])

    // Select Restaurant
    const selectRestaurant = async (restaurant) => {
        setEditedRestaurant(restaurant)
    }

    // Edit a Restaurant
    const editRestaurant = async (data) => {
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
    return (
        <>
            <Header /* <button onClick={handleLogout}>Logout</button> */ />
            <div className="App">
                App
            <div className="App__sidebar">
                    <h3>Add Filters Here</h3>
                </div>
                <div className="App__mainview">
                    <h2>Local Restaurants</h2>
                    <ul className="App__mainview--grid">
                        {restaurants ? restaurants.restaurants.filter(rest => rest.restaurant.thumb).map((restaurant) => {
                            // restaurant.url = `http://`+restaurant.url
                            return (
                                <li key={restaurant.restaurant.id} className="__individualRestaurant">
                                    <a href="" className="--pic">{restaurant.picture}</a>
                                    <img src={restaurant.restaurant.thumb}></img>
                                    <h3 className="--name">{restaurant.restaurant.name}</h3>
                                    {/* <button onClick={() => {
                                        selectRestaurant(restaurant)
                                    }}>Edit this restaurant</button> */}
                                </li>
                            )
                        }) : `Searching Your Restaurants`
                        }
                    </ul>
                </div>
            </div>
        </>
    )


}
const target = document.getElementById('app');
ReactDOM.render(<App />, target);