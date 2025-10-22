import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        // if(password.length < 6) {
        //     setError('Passwordd must bd 6 word')
        // }else{
        //     setError('')
        // }
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email"  required/>
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