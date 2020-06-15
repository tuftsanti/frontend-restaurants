import React from 'react';
import Footer from './Footer.js'
import '../scss/style2.scss';
import $ from 'jquery'
import UserContext from '../context/UserContext';
import Axios from 'axios'

export default (props) => {
    const [restaurants, setRestaurant1] = React.useState(null);
    const [cuisineType, setCuisineType] = React.useState('');
    const [loggedIn, setLoggedIn] = React.useState(false);

    const getRestaurants = async () => {
        let [response1, response2, response3, response4, response5] = await Promise.all([
            fetch('https://developers.zomato.com/api/v2.1/search?start=0&count=20&lat=42.3601&lon=-71.0589&radius=4000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian%2C%20Mexican', {
                headers: {
                    "user-key": "43857380d1047f74d7d7691dea96f3a5"
                }
            }
            ),
            fetch('https://developers.zomato.com/api/v2.1/search?start=20&count=20&lat=42.3601&lon=-71.0589&radius=4000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian%2C%20Mexican', {
                headers: {
                    "user-key": "43857380d1047f74d7d7691dea96f3a5"
                }
            }
            ),
            fetch('https://developers.zomato.com/api/v2.1/search?start=40&count=20&lat=42.3601&lon=-71.0589&radius=4000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian%2C%20Mexican', {
                headers: {
                    "user-key": "43857380d1047f74d7d7691dea96f3a5"
                }
            }
            ),
            fetch('https://developers.zomato.com/api/v2.1/search?start=60&count=20&lat=42.3601&lon=-71.0589&radius=4000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian%2C%20Mexican', {
                headers: {
                    "user-key": "43857380d1047f74d7d7691dea96f3a5"
                }
            }
            ),
            fetch('https://developers.zomato.com/api/v2.1/search?start=80&count=20&lat=42.3601&lon=-71.0589&radius=4000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian%2C%20Mexican', {
                headers: {
                    "user-key": "43857380d1047f74d7d7691dea96f3a5"
                }
            }
            )
    ]);

    const result1 = await response1.json()
    const result2 = await response2.json()
    const result3 = await response3.json()
    const result4 = await response4.json()
    const result5 = await response5.json()
    
    for (let x = 0; x < 20; x++) {
        result5.restaurants.push(result2.restaurants[x]);
        result5.restaurants.push(result3.restaurants[x]);
        result5.restaurants.push(result4.restaurants[x]);
        result5.restaurants.push(result1.restaurants[x]);
    }
    setRestaurant1(result5);
    
    };

    // Store jwt
    const [token, setToken] = React.useState(null)
    const {userData} = React.useContext(UserContext)

    // Localize storage for jwt
    React.useEffect(() => {
        const checkToken = JSON.parse(window.localStorage.getItem('auth-token'))
        if (checkToken) {
            setToken(checkToken)
        }
    }, [])

    React.useEffect(() => {
        getRestaurants()
    }, []);

    // Add a Restaurant
<<<<<<< HEAD
    const pickRestaurant = async (favRestaurant, id) => {
        
=======
    const pickRestaurant = async (favRestaurant, event) => {
>>>>>>> 468c6e4ec3e17a2fcc637fcd8eaf49dd7fad9760
        const response = await fetch(`https://project3-restaurants-app.herokuapp.com/restaurants`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json" ,
            Authorization: `bearer ${userData.token}`
            },
            body: JSON.stringify(favRestaurant)
        });
        
        if (response.status == 500) {
            setLoggedIn(true)
        } else {
            turnButtonGreen(id)   
        }

    }

    const changeCuisine = async (event) => {
        event.preventDefault();
        if ($("#Breakfast").is(":checked")) {
            setCuisineType("Breakfast");

        } else if ($("#American").is(":checked")) {
            setCuisineType("American");
        
        } else if ($("#Burger").is(":checked")) {
            setCuisineType("Burger");
        
        } else if ($("#Chinese").is(":checked")) {
            setCuisineType("Chinese");

        } else if ($("#Indian").is(":checked")) {
            setCuisineType("Indian");

        } else if ($("#Desserts").is(":checked")) {
            setCuisineType("Desserts");

        } else if ($("#French").is(":checked")) {
            setCuisineType("French");

        } else if ($("#Italian").is(":checked")) {
            setCuisineType("Italian");

        } else if ($("#Mexican").is(":checked")) {
            setCuisineType("Mexican");

        } else if ($("#Seafood").is(":checked")) {
            setCuisineType("Seafood");

        } else if ($("#searchAll").is(":checked")) {
            setCuisineType("");

        }  else {
            setCuisineType('')
        }

    };

    const [isClicked, setClicked] = React.useState(null)

    const turnButtonGreen = (key) => {
        setClicked(key)
    }


    $('.checkybox').on('change', function () {
        $('.checkybox').not(this).prop('checked', false);
    });

    return (
        <>
            <div className="App">
                <div className="App__header">
                    <img src="https://i.imgur.com/JhjGP92.jpg"></img>
                    {/* <h2 className="centered">Some text that Pops Off</h2> */}
                </div>
                <div className="App__header2">
                    <h1>Local Favorites</h1>
                </div>
                <div className="App__mainview">
                    <div className="App__mainview--sidebar">
                        <div className="App__mainview--sidebar__header">
                            <h3>Choose your flavor:</h3>
                        </div>
                        <div className="App__mainview--sidebar__filters">
                            <form className="filter-form" id="something" onSubmit={changeCuisine}>
                                <label htmlFor="American">American</label>
                                <input className="checkybox" type="checkbox" id="American" name="American" value="American" />
                                <br />
                                <label htmlFor="Burger">Burgers</label>
                                <input className="checkybox" type="checkbox" id="Burger" name="Burger" value="Burger" />
                                <br />
                                <label htmlFor="French">French</label>
                                <input className="checkybox" type="checkbox" id="French" name="French" value="French" />
                                <br />
                                <label htmlFor="Indian">Indian</label>
                                <input className="checkybox" type="checkbox" id="Indian" name="Indian" value="Indian" />
                                <br />
                                <label htmlFor="Desserts">Desserts</label>
                                <input className="checkybox" type="checkbox" id="Desserts" name="Desserts" value="Desserts" />
                                <br />
                                <label htmlFor="Italian">Italian</label>
                                <input className="checkybox" type="checkbox" id="Italian" name="Italian" value="Italian" />
                                <br />
                                <label htmlFor="Mexican">Mexican</label>
                                <input className="checkybox" type="checkbox" id="Mexican" name="Mexican" value="Mexican" />
                                <br />
                                <label htmlFor="Seafood">Seafood</label>
                                <input className="checkybox" type="checkbox" id="Seafood" name="Seafood" value="Seafood" />
                                <br />
                                <label htmlFor="searchAll">Search All...</label>
                                <input className="checkybox" type="checkbox" id="searchAll" name="searchAll" value="searchAll" />
                                <br />
                                <input type="submit" id="Submit" name="Submit" value="Submit"></input>
                                <br />
                            </form>
                        </div>
                    </div>
                    <ul className="App__mainview--grid">
                        {restaurants ?
                            restaurants.restaurants.filter(rest => rest.restaurant.thumb && rest.restaurant.cuisines.includes(cuisineType)).slice(0,15).map((restaurant) => {
                                return (
                                    <li key={restaurant.restaurant.id} className="App__mainview--grid__individualRestaurant">
                                        <img src={restaurant.restaurant.thumb} className="App__mainview--grid__individualRestaurant--pic" />
                                        <div className="App__mainview--grid__individualRestaurant--name">
                                            <div className="names">
                                                <h3>{restaurant.restaurant.name}</h3>
                                                <h6>{restaurant.restaurant.location.locality} - {restaurant.restaurant.location.city}, MA</h6>
                                            </div>
                                            <div className="icon">
                                                { isClicked == restaurant.restaurant.id ? 
                                                    <ion-icon name="checkmark-circle" style={{color: 'green'}}>
                                                    </ion-icon> :
                                                   <ion-icon className="plus-icon" name="add-circle-outline" onClick={() => {
                                                    pickRestaurant(restaurant, restaurant.restaurant.id)
                                                }}></ion-icon> 
                                                }
                                                    
                                            </div>
                                        </div>

                                    </li>
                                )
                            })
                            :
                            <h1>Searching Local Restaurants...</h1>
                        }
                    </ul>
                </div>
                <Footer/>
                {loggedIn ? 
                <div className="error-modal">
                    <div className="error-modal-textbox">
                        <div className="modal-image">
                            <img src="https://i.imgur.com/FeiXWXA.png"></img>
                        </div>
                        <h1>Oops! Something went wrong! </h1>
                        <h4>You need to log in first!</h4>
                        <div id="modal-footer">
                            <button className="modal-buttons" onClick={() => {
                                setLoggedIn(false)
                            }}>
                            Close
                            </button>
                        </div>
                    </div>
                </div> 
                : ""}
            </div>

        </>
    )


}