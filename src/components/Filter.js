import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
<<<<<<< HEAD
    const [cuisineChoice, setCuisineChoice] = React.useState(
        ""
    )

    const handleChange = (event) => {
        // setFormData({...formData, [event.target.name]: event.target.value})
        setCuisineChoice(cuisine.options[cuisine.selectedIndex].value)
        console.log(cuisine.options[cuisine.selectedIndex].value)
        console.log(cuisineChoice)
    }

    return (
        <>
            <h1 className="filter-h1">What's Your Flavor?</h1>
            <form className="filter-form" onChange={handleChange}>
                <label for="cuisine">Cuisine of Choice:</label>
                <select id="cuisine" name="cuisine">
                    <option value="">Any</option>
                    <option value="American">American</option>
                    <option value="Asian">Asian</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Thai">Thai</option>
                </select>
            </form>
            
            {/* <form className="filter-form">
                <input type="checkbox" id="American" name="American" value={formData.cuisineChoice = "American"} onChange={handleChange}/>
                <label for="American">American</label><br/>
                <input type="checkbox" id="Asian" name="Asian" value="Asian"/>
                <label for="Asian">Asian</label><br/>
                <input type="checkbox" id="Breakfast" name="Breakfast" value="Breakfast"/>
                <label for="Breakfast">Breakfast</label><br/>
                <input type="checkbox" id="Desserts" name="Desserts" value="Desserts"/>
                <label for="Desserts">Desserts</label><br/>
                <input type="checkbox" id="Italian" name="Italian" value="Italian"/>
                <label for="Italian">Italian</label><br/>
                <input type="checkbox" id="Mexican" name="Mexican" value="Mexican"/>
                <label for="Mexican">Mexican</label><br/>
                <input type="checkbox" id="Pizza" name="Pizza" value="Pizza"/>
                <label for="Pizza">Pizza</label><br/>
                <input type="checkbox" id="Seafood" name="Seafood" value="Seafood"/>
                <label for="Seafood">Seafood</label><br/>
                <input type="checkbox" id="Thai" name="Thai" value="Thai"/>
                <label for="Thai">Thai</label><br/>
            </form> */}
=======
    return (
        <>

            <form className="filter-form">
                    <label htmlFor="American">American</label>
                    <input type="checkbox" id="American" name="American" value="American"/>
                    <br/>
                    <label htmlFor="Asian">Asian</label>
                    <input type="checkbox" id="Asian" name="Asian" value="Asian"/>
                    <br/>
                    <label htmlFor="Breakfast">Breakfast</label>
                    <input type="checkbox" id="Breakfast" name="Breakfast" value="Breakfast"/>
                    <br/>
                    <label htmlFor="Desserts">Desserts</label>
                    <input type="checkbox" id="Desserts" name="Desserts" value="Desserts"/>
                    <br/>
                    <label htmlFor="Italian">Italian</label>
                    <input type="checkbox" id="Italian" name="Italian" value="Italian"/>
                    <br/>
                    <label htmlFor="Mexican">Mexican</label>
                    <input type="checkbox" id="Mexican" name="Mexican" value="Mexican"/>
                    <br/>
                    <label htmlFor="Seafood">Seafood</label>
                    <input type="checkbox" id="Seafood" name="Seafood" value="Seafood"/>
                    <br/>
                    <input type="submit" id="Submit" name="Submit" value="Submit"></input>
                    <br/>
            </form>
>>>>>>> 51d574f7b0ac02385c5c158cfb7b7bbb255533a1
        </>
    );
};