import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    return (
        <>
            <h1 className="filter-h1">What's Your Flavor?</h1>
            <form className="filter-form">
                <input type="checkbox" id="American" name="American" value="American"/>
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
                <input type="checkbox" id="Seafood" name="Seafood" value="Seafood"/>
                <label for="Seafood">Seafood</label><br/>
            </form>
        </>
    );
};