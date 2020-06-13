import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Show extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        <>
            <h1>{this.state.name}</h1>
            <img src={this.state.thumb}/>
            <h3>Website:<a href={`http://`+this.state.url} target="_blank">{this.state.url}</a></h3>
            <h3>Address:</h3>
            <div>{this.state.location.address}</div>
            <ion-icon name="add-circle-outline"onClick={() => {
                selectRestaurant(restaurant)
            }}></ion-icon>            
        </>
    };
}