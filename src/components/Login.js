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
        const loginUser = {username, password}
        const loginResponse = await Axios.post('http://localhost:3000/users/login', loginUser)
        setUserData({
            token: loginResponse.data.token /*,
            user: loginResponse.data.user*/
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
                    type="submit" value= 'Login'/>
            </form>
        </div>
    );
};
