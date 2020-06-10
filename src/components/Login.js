import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <div className="login-div">
            Username: <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}/><br/>
            Password: <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}/><br/>
            <button onClick={()=> {
                props.handleSubmit(formData)
            }}
            >Login</button>
        </div>
    );
};