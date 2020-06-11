import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    
    const [favorites, setFavorites] = React.useState(null)

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

    React.useEffect(()=> {
            getFavs()
    }, [])

    return (
        <>
            <h1>My Favorites</h1>
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
