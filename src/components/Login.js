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
<<<<<<< HEAD
        Axios.post('https://project3-restaurants-app.herokuapp.com/users/login', loginUser)
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
=======
        const loginResponse = await Axios.post('https://project3-restaurants-app.herokuapp.com/users/login', loginUser)
        setUserData({
            token: loginResponse.data.token /*,
            user: loginResponse.data.user*/
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
                    type="submit" value= 'Login'/>
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
