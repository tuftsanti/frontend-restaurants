import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer.js'
import UserContext from '../context/UserContext'

export default (props) => {
    
    const [favorites, setFavorites] = React.useState(null)
    const {userData} = React.useContext(UserContext)
    // Store jwt
    const [token, setToken] = React.useState(null)

    // // Localize storage for jwt
    React.useEffect(() => {
        const checkToken = JSON.parse(window.localStorage.getItem('auth-token'))
        if (checkToken) {
            setToken(checkToken)
        }
    }, [])
    
    const getFavs = async () => {
        const response = await fetch('https://project3-restaurants-app.herokuapp.com/restaurants', {
            headers: {Authorization: `bearer ${userData.token}`}
        })
        const result = await response.json();
        if (result.length > 0) {
            setFavorites(result)
        } else {
            setFavorites(null);
        }

    }

    //Delete Favorite//
    const handleDelete = async (id) => {
        const response = await fetch(`https://project3-restaurants-app.herokuapp.com/restaurants/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json" ,
            Authorization: `bearer ${userData.token}`}
        })
        getFavs();
    }

    React.useEffect(()=> {
            getFavs()
    }, [])

    // console.log(favorites)
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
                                        <div className="Favorites__mainview--grid__individualRestaurant--pic">
                                            <a href={favorite.restaurant.url} target="_blank">
                                                <img src={favorite.restaurant.thumb}/>
                                            </a>
                                        </div>
                                        <div className="Favorites__mainview--grid__individualRestaurant--name">
                                            <div className="favorites-names">
                                                <h3>{favorite.restaurant.name} </h3>
                                                <h6>{favorite.restaurant.location.locality} - {favorite.restaurant.location.city}, MA</h6>
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
                         <div className="Favorites__mainview--grid--filler">
                             <img src="https://i.imgur.com/FeiXWXA.png"></img>
                             <h1> Oops! you dont have any favorites yet...</h1>
                         </div>
                        }
                        
                    </ul>
                </div>
                <Footer className="footer" />
            </div>
        </>
    );
};
