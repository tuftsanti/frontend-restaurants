import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';

export default (props) => {
    
    const [favorites, setFavorites] = React.useState(null)
    
    const getFavs = async () => {
        const response = await fetch('http://localhost:3000/restaurants', {
        })
        const result = await response.json();
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
                    {<h2>Your Favorites:</h2>}

                </div>
                <div className="Favorites__mainview">
                    <ul className="Favorites__mainview--grid">
                        { favorites ? 
                            favorites.map((favorite, index) => {
                                return (
                                    <li key={index} className="Favorites__mainview--grid__individualRestaurant">
                                        <img src={favorite.restaurant.thumb} className="Favorites__mainview--grid__individualRestaurant--pic"/>
                                        <h3 className="Favorites__mainview--grid__individualRestaurant--name">{favorite.restaurant.name}</h3>
                                        <ion-icon name="trash-outline" onClick={()=> {
                                            handleDelete(favorite._id)
                                        }}></ion-icon>
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
