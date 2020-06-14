import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom';
import UserContext from '../context/UserContext'

export default function Authorization() {
    const {userData, setUserData} = useContext(UserContext)
    const history = useHistory()

    const register = () => {
        history.push("/register")
    }
    const login = () => {
        history.push("/login")
    }
    const logout = () => {
        setUserData ({
            token: undefined,
            user: undefined
        })
        localStorage.removeItem("auth-token")
    }

    return (
        <>
            {userData.user ? 
                (<button onClick={logout}>Logout</button>) : 
                (<> 
                    <button onClick={register}>Register</button>
                    <button onClick={login}>Login</button>
                </>)
            }
        </>
    )
}