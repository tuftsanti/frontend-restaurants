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

    const [errorStatus, setErrorStatus] = React.useState(false)

    const submit = async (event) => {
        event.preventDefault()
<<<<<<< HEAD
        try {
            const newUser = {username, password}
            await Axios.post('https://project3-restaurants-app.herokuapp.com/users/register', newUser)
            const loginResponse = await Axios.post('https://project3-restaurants-app.herokuapp.com/users/login', {username, password})
            await setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            })
            await localStorage.setItem("auth-token", JSON.stringify(loginResponse.data.token))
             history.push('/');
        }
        catch(error) {
            setErrorStatus(true)
        }
    }

    const updateErrorStatus = async (variable) => {
        await setErrorStatus(variable);
=======
        const newUser = {username, password}
        await Axios.post('https://project3-restaurants-app.herokuapp.com/users/register', newUser)
        const loginResponse = await Axios.post('https://project3-restaurants-app.herokuapp.com/users/login', {username, password})
        setUserData({
            token: loginResponse.data.token,
            user: loginResponse.data.user
        })
        localStorage.setItem("auth-token", JSON.stringify(loginResponse.data.token))
        history.push('/')
>>>>>>> 468c6e4ec3e17a2fcc637fcd8eaf49dd7fad9760
    }

    return (
        <div className="App">
            <form className="login-div" onSubmit={submit}>
                Username: <input type="text" onChange={(event) => setUsername(event.target.value)}/><br/>
                Password: <input type="password" onChange={(event) => setPassword(event.target.value)}/><br/>
                <input 
                    type="submit" value= 'Register'/>
            </form>
            {errorStatus ? 
                <div className="error-modal">
                    <div className="error-modal-textbox">
                        <div className="modal-image">
                            <img src="https://i.imgur.com/FeiXWXA.png"></img>
                        </div>
                        <h2>Oops! Something went wrong! </h2>
                        <h4>Seems like someone may already have that username/password.</h4>
                        <div id="modal-footer">
                            <button className="modal-buttons" onClick={() => {
                                updateErrorStatus(false)
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
