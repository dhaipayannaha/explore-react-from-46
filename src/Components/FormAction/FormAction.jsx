import React from 'react';

const FormAction = () => {
    const handelFormAction = (formData) => {
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }

    return (
        <div>
            <form action={handelFormAction}>
                <input type="text" name='name' placeholder='name' />
                <br />
                <input type="email" name='email' id="" placeholder='email'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;