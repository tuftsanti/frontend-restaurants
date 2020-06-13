import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    
    const [favorites, setFavorites] = React.useState(null)

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
    
    const getFavs = async () => {
        const response = await fetch('http://localhost:3000/restaurants', {
            // headers: {
            //     Authorization: `bearer $[token}`,
            // }
        })
        const result = await response.json();
        console.log(result)
        setFavorites(result)
    }

    //Delete Favorite//
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3000/restaurants/${id}`, {
            method: 'DELETE'
        })
        getFavs();
    }

    React.useEffect(()=> {
            getFavs()
    }, [])

    return (
        <>
            <div className="Favorites">
                <div className="Favorites__header">
                    <img src="https://i.imgur.com/ZTaJz6r.jpg"></img>
                </div>
                <div className="Favorites__header2">
                    {<h1>Your Favorites:</h1>}
                </div>
                <div className="Favorites__mainview">
                    <ul className="Favorites__mainview--grid">
                        { favorites ? 
                            favorites.map((favorite, index) => {
                                return (
                                    <li key={index} className="Favorites__mainview--grid__individualRestaurant">
                                        <img src={favorite.restaurant.thumb} className="Favorites__mainview--grid__individualRestaurant--pic"/>
                                        <div className="Favorites__mainview--grid__individualRestaurant--name">
                                            <div className="favorites-names">
                                                <h3>{favorite.restaurant.name} </h3>
                                                <h6>{favorite.restaurant.location.city}, MA</h6>
                                            </div>
                                            <div className="trash-icon">
                                                <ion-icon name="trash-outline" onClick={()=> {
                                                    handleDelete(favorite._id)
                                                }}></ion-icon>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                         : 
                        `Loading Your Restaurants`
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};
