import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery"
import { Link } from 'react-router-dom';

export default (props) => {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $( '.header' ).addClass( 'shadow' );
        } else {
            $( '.header' ).removeClass( 'shadow' );
        }
    });
    return (
        <div className= "header">
            <div className="header__img">
                <img src="https://i.imgur.com/8Zn8m8R.png"></img>
            </div>
            <div className="header__nav">
                <Link to="/" style={{ textDecoration: 'none' }}><span>Home</span></Link>
                <Link to="/favorites" style={{ textDecoration: 'none' }}><span>Favorites</span></Link>
                <Link to="/login" style={{ textDecoration: 'none' }}><span>Log In</span></Link>
            </div>
        </div>
    );
};
