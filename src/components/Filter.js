import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
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
                    <input type="submit" id="Submit" name="Submit" value="Submit"/>
                    <br/>
            </form>
        </>
    );
};