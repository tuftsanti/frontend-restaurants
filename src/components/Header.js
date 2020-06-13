import React, {useContext} from 'react';
import $ from "jquery";
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import UserContext from '../context/UserContext';

export default (props) => {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $( '.header' ).addClass( 'shadow' );
        } else {
            $( '.header' ).removeClass( 'shadow' );
        }
    });

    const {userData, setUserData} = useContext(UserContext)

    const history = useHistory();

    const logout = () => {
        setUserData ({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", '')
        history.push('/')
    }


    return (
        <div className= "header">
            <div className="header__img">
                <img src="https://i.imgur.com/8Zn8m8R.png"></img>
            </div>
            <div className="header__nav">
                <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
                {userData.user ? 
                (<><Link to="/favorites" style={{ textDecoration: 'none' }}><span>Favorites</span></Link>
                <Link style={{ textDecoration: 'none' }}><span onClick={logout}>Logout</span></Link></>) : 
                (<>
                <Link to="/register" style={{ textDecoration: 'none' }}><span>Register</span></Link>
                <Link to="/login" style={{ textDecoration: 'none' }}><span>Log In</span></Link></>)}
            </div>
        </div>
    );
};
