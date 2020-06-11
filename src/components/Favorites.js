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
            <div className="App">
                <div className="App__mainview">
                    <h2 className="resultTitle">Local Restaurants</h2>
                    <ul className="App__mainview--grid">
                        { favorites ? 
                            favorites.map((favorite, index) => {
                                return (
                                    <li key={index} className="App__mainview--grid__individualRestaurant">
                                        <img src={favorite.restaurant.thumb} className="App__mainview--grid__individualRestaurant--pic"/>
                                        <h3 className="App__mainview--grid__individualRestaurant--name">{favorite.restaurant.name}</h3>
                                        <ion-icon name="trash-outline" onClick={()=> {
                                            handleDelete(favorite._id)
                                        }}></ion-icon>
                                    </li>
                                )
                            })
                         : 
                        `Loading Your Favorites`
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};
