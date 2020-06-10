import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery"

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
            <div>
                <img src="https://i.imgur.com/pnd4BXy.png"></img>
            </div>
        </div>
    );
};
