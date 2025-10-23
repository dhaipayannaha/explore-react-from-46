import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name)
        // if(password.length < 6) {
        //     setError('Passwordd must bd 6 word')
        // }else{
        //     setError('')
        // }
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handelPasswordOnChange = e => {
        console.log(e.target.value)
        setPassword(e.target.value)

        if(password.length < 6) {
            setError('Passwordd must bd 6 word')
        }else{
            setError('')
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameChange} defaultValue={name} />
                <br />
                <input type="email" onChange={handleEmailChange} defaultValue={email} name="email"  required/>
                <br />
                <input type="password" onChange={handelPasswordOnChange} defaultValue={password} name="password"  required/>
                <br />
                <input type="submit" value="Submit" />
            </form>

            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;