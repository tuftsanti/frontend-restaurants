import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer.js';
import Filter from './Filter.js';
import '../scss/style.scss';
import $ from 'jquery'

export default (props) => {
    const [restaurants, setRestaurant] = React.useState(null);
    const [cuisineType, setCuisineType] = React.useState('');

    let allRestaurants = [];
    const getRestaurants = async () => {
        const response = await fetch('https://developers.zomato.com/api/v2.1/search?start=50&count=100&lat=42.361145&lon=-71.057083&radius=1000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian', {
        headers: { 
            "user-key" : "43857380d1047f74d7d7691dea96f3a5"
        }
    });
        const result = await response.json()
        console.log(result)
        allRestaurants = result;
        await setRestaurant(result)
    };

    // Store jwt
    const [token, setToken] = React.useState(null)

    // // Localize storage for jwt
    React.useEffect(() => {
        const checkToken = JSON.parse(window.localStorage.getItem('token'))
        if (checkToken) {
            setToken(checkToken)
        }
    }, [])
  
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

    const changeCuisine = async (event) => {
        event.preventDefault();
        if ($("#Breakfast").is(":checked")){
            setCuisineType($("#Breakfast").val());
            console.log(cuisineType);

        } else if ($("#American").is(":checked")){
            setCuisineType($("#American").val());

        } else if ($("#Chinese").is(":checked") ){
            setCuisineType($("#Chinese").val());

        } else if ($("#Indian").is(":checked") ){
            setCuisineType($("#Indian").val());

        } else if ($("#Desserts").is(":checked") ){
            setCuisineType($("#Desserts").val());

        } else if ($("#Italian").is(":checked") ){
            setCuisineType($("#Italian").val());

        } else if ($("#Mexican").is(":checked") ){
            setCuisineType($("#Mexican").val());

        } else if ($("#Seafood").is(":checked") ){
            setCuisineType($("#Seafood").val());

        } else {
            setCuisineType('')
        }
        
    };

    React.useEffect(() => {
        getRestaurants()
    }, []);


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

    $('.checkybox').on('change', function() {
        $('.checkybox').not(this).prop('checked', false);  
    });
    
    return (
        <>    
            <div className="App">
                <div className="App__header">
                    {<h2>Here are some of <span id="header-red">Boston's</span> best food spots:</h2>}

                </div>
                <div className="App__mainview">
                    <div className="App__mainview--sidebar">
                        <div className="App__mainview--sidebar__header">
                            <h3>Choose your flavor:</h3> 
                        </div>
                        <div className="App__mainview--sidebar__filters">
                            <form className="filter-form" id="something" onSubmit={changeCuisine}>
                                <label htmlFor="American">American</label>
                                <input className="checkybox" type="checkbox" id="American" name="American" value="American"/>
                                <br/>
                                <label htmlFor="Chinese">Chinese</label>
                                <input className="checkybox" type="checkbox" id="Chinese" name="Chinese" value="Chinese"/>
                                <br/>
                                <label htmlFor="Indian">Indian</label>
                                <input className="checkybox" type="checkbox" id="Indian" name="Indian" value="Indian"/>
                                <br/>
                                <label htmlFor="Desserts">Desserts</label>
                                <input className="checkybox" type="checkbox" id="Desserts" name="Desserts" value="Desserts"/>
                                <br/>
                                <label htmlFor="Italian">Italian</label>
                                <input className="checkybox" type="checkbox" id="Italian" name="Italian" value="Italian"/>
                                <br/>
                                <label htmlFor="Mexican">Mexican</label>
                                <input className="checkybox" type="checkbox" id="Mexican" name="Mexican" value="Mexican"/>
                                <br/>
                                <label htmlFor="Seafood">Seafood</label>
                                <input className="checkybox" type="checkbox" id="Seafood" name="Seafood" value="Seafood"/>
                                <br/>
                                <input type="submit" id="Submit" name="Submit" value="Submit"></input>
                                <br/>
                            </form>  
                        </div>
                    </div>
                    <ul className="App__mainview--grid">
                        { restaurants ? 
                        restaurants.restaurants.filter(rest => rest.restaurant.thumb && rest.restaurant.cuisines.includes(cuisineType)).map((restaurant) => {
                            return (
                                <li key={restaurant.restaurant.id} className="App__mainview--grid__individualRestaurant">
                                    <img src={restaurant.restaurant.thumb} className="App__mainview--grid__individualRestaurant--pic"/>
                                    <h3 className="App__mainview--grid__individualRestaurant--name">{restaurant.restaurant.name}
                                    <button onClick={() => {
                                        pickRestaurant(restaurant)
                                    }}></button></h3>
                                
                                </li>
                            )})
                         : 
                        `Searching Your Restaurants`
                        }
                    </ul>
                </div>
                <Footer className="footer" /* <button onClick={handleLogout}>Logout</button> */ />
            </div>
            
        </>
    )


}