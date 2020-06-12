import React, {useContext} from 'react'
import ReactDOM from 'react-dom';
import $ from "jquery"
import { Link } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';
import UserContext from '../context/UserContext'

export default (props) => {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $( '.header' ).addClass( 'shadow' );
        } else {
            $( '.header' ).removeClass( 'shadow' );
        }
    });

    const {userData, setUserData} = useContext(UserContext)
    // const history = useHistory()
    // const register = () => {
    //     history.push("/register")
    // }
    // const login = () => {
    //     history.push("/login")
    // }
    const logout = () => {
        setUserData ({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", '')
    }


    return (
        <div className= "header">
            <div className="header__img">
                <img src="https://i.imgur.com/pnd4BXy.png"></img>
            </div>
            <div className="header__nav">
                <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
                <Link to="/favorites" style={{ textDecoration: 'none' }}><span>Favorites</span></Link>
                {userData.user ? 
                (<span onClick={logout}>Logout</span>) : 
                (<>
                <Link to="/register" style={{ textDecoration: 'none' }}><span>Register</span></Link>
                <Link to="/login" style={{ textDecoration: 'none' }}><span>Log In</span></Link></>)}
            </div>
        </div>
    );
};
