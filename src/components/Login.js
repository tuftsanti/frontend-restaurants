import React from 'react';
import Axios from 'axios'
import UserContext from '../context/UserContext'
import {useHistory} from 'react-router-dom';
import Footer from './Footer'


export default (props) => {
    const [username, setUsername] = React.useState()
    const [password, setPassword] = React.useState()

    const {setUserData} = React.useContext(UserContext)
    const history = useHistory();

    const [error, setError] = React.useState(false);

    const submit = (event) => {
        event.preventDefault()
        const loginUser = {username, password}
           Axios.post('https://andys-restaurants.herokuapp.com/users/login', loginUser)
            .then(function (response){
                // console.log(response)
                setUserData({
                    token: response.data.token 
                });
                localStorage.setItem("auth-token", JSON.stringify(response.data.token));
                history.push('/');
                })
                .catch(function(error){
                    console.log(error)
                    setError(true)
                });
    }
    const updateErrorState = async (variable) => {
        await setError(variable);
    }

    return (
        <div className="App">
            <form className="login-div" onSubmit={submit}>
                <fieldset>
                    <legend>Log-In:</legend>
                    <label for="username">Username:</label>
                    <input type="text" id="username" onChange={(event) => setUsername(event.target.value)}/><br/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" onChange={(event) => setPassword(event.target.value)}/><br/>
                    <input type="submit" value= 'Login'/>
                </fieldset>
                
            </form>

            {error ? 
                <div className="error-modal">
                    <div className="error-modal-textbox">
                        <div className="modal-image">
                            <img src="https://i.imgur.com/FeiXWXA.png"></img>
                        </div>
                        <h1>Oops! Something went wrong! </h1>
                        <h4>Try another username and password</h4>
                        <div id="modal-footer">
                            <button className="modal-buttons" onClick={() => {
                                updateErrorState(false)
                            }}>
                            Close
                            </button>
                        </div>
                    </div>
                </div> 
                : ""}
            <Footer/>
        </div>
    );
};
