import React from 'react';
import Axios from 'axios'
import UserContext from '../context/UserContext'
import {useHistory} from 'react-router-dom';

export default (props) => {
    const [username, setUsername] = React.useState()
    const [password, setPassword] = React.useState()

    const {setUserData} = React.useContext(UserContext)
    const history = useHistory();

    const submit = async (event) => {
        event.preventDefault()
        const newUser = {username, password}
        await Axios.post('https://andys-restaurants.herokuapp.com/users/register', newUser)
        const loginResponse = await Axios.post('https://andys-restaurants.herokuapp.com/users/login', {username, password})
        setUserData({
            token: loginResponse.data.token,
            user: loginResponse.data.user
        })
        localStorage.setItem("auth-token", JSON.stringify(loginResponse.data.token))
        history.push('/')
    }

    return (
        <div className="App">
            <form className="login-div" onSubmit={submit}>
                Username: <input type="text" onChange={(event) => setUsername(event.target.value)}/><br/>
                Password: <input type="password" onChange={(event) => setPassword(event.target.value)}/><br/>
                <input 
                    type="submit" value= 'Register'/>
            </form>
        </div>
    );
};
