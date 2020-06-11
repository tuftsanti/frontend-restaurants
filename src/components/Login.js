import React from 'react';
import ReactDOM from 'react-dom';

export default (props) => {
<<<<<<< HEAD
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
=======
    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
            </div>
        </>
    );
};
>>>>>>> 51d574f7b0ac02385c5c158cfb7b7bbb255533a1
