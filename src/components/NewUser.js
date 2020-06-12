import React from 'react';

export default (props) => {
    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    //handleCreate function for the form
    const handleCreate = async (data) => {
        const response = await fetch('http://localhost:3000/users', {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
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
                props.handleSubmit(handleCreate(formData))
            }}
            >Create User</button>
        </div>
    );
};