import React from 'react';
import Footer from './Footer.js'
import '../scss/style2.scss';
import $ from 'jquery'

export default (props) => {
    const [restaurants, setRestaurant] = React.useState(null);
    const [cuisineType, setCuisineType] = React.useState('');
    const [showButton, setButtonType] = React.useState(true);

    const getRestaurants = async () => {
        const response = await fetch('https://developers.zomato.com/api/v2.1/search?start50&count=100&lat=42.361145&lon=-71.057083&radius=1000&cuisines=American%2C%20Italian%2C%20Chinese%2C%20BBQ%2C%20Indian', {
            headers: {
                "user-key": "43857380d1047f74d7d7691dea96f3a5"
            }
        });
        const result = await response.json()
        console.log(result)
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

    const changeCuisine = async (event) => {
        event.preventDefault();
        if ($("#Breakfast").is(":checked")) {
            setCuisineType($("#Breakfast").val());
            console.log(cuisineType);

        } else if ($("#American").is(":checked")) {
            setCuisineType($("#American").val());

        } else if ($("#Chinese").is(":checked")) {
            setCuisineType($("#Chinese").val());

        } else if ($("#Indian").is(":checked")) {
            setCuisineType($("#Indian").val());

        } else if ($("#Desserts").is(":checked")) {
            setCuisineType($("#Desserts").val());

        } else if ($("#Italian").is(":checked")) {
            setCuisineType($("#Italian").val());

        } else if ($("#Mexican").is(":checked")) {
            setCuisineType($("#Mexican").val());

        } else if ($("#Seafood").is(":checked")) {
            setCuisineType($("#Seafood").val());

        } else {
            setCuisineType('')
        }

    };

    React.useEffect(() => {
        getRestaurants()
    }, []);

    // Add a Restaurant
    const pickRestaurant = async (favRestaurant, event) => {
        const response = await fetch(`http://localhost:3000/restaurants`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json" /*,
            Authorization: `bearer ${token}` */
            },
            body: JSON.stringify(favRestaurant)
        });
        // console.log(response)
        getRestaurants();

    }

    $('.checkybox').on('change', function () {
        $('.checkybox').not(this).prop('checked', false);
    });

    return (
        <>
            <div className="App">
                <div className="App__header">
                    <img src="https://i.imgur.com/3aYrSfT.jpg"></img>
                </div>
                <div className="App__header2">
                    <h1>Local Favorites:</h1>
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
                                <label htmlFor="Chinese">Chinese</label>
                                <input className="checkybox" type="checkbox" id="Chinese" name="Chinese" value="Chinese" />
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
                                <input type="submit" id="Submit" name="Submit" value="Submit"></input>
                                <br />
                            </form>
                        </div>
                    </div>
                    <ul className="App__mainview--grid">
                        {restaurants ?
                            restaurants.restaurants.filter(rest => rest.restaurant.thumb && rest.restaurant.cuisines.includes(cuisineType)).map((restaurant) => {
                                return (
                                    <li key={restaurant.restaurant.id} className="App__mainview--grid__individualRestaurant">
                                        <img src={restaurant.restaurant.thumb} className="App__mainview--grid__individualRestaurant--pic" />
                                        <div className="App__mainview--grid__individualRestaurant--name">
                                            <div className="names">
                                                <h3>{restaurant.restaurant.name}</h3>
                                                <h6>{restaurant.restaurant.location.city}, MA</h6>
                                            </div>
                                            <div className="icon">
                                                {showButton ?
                                                    <ion-icon className="plus-icon" name="add-circle-outline" onClick={() => {
                                                        pickRestaurant(restaurant, event)
                                                    }}></ion-icon>
                                                    : <p>hi</p>}
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
                <Footer className="footer" />
            </div>

        </>
    )


}