import React, { useState } from 'react'
import LoginForm from './LoginForm';


function LoginPage() {

    const [ input, setInput ] = useState( "" );
    const handleChange = ( event ) => {
        setInput( event.target.value )
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();
        alert( `Bonjour ${ input }` );
        setInput( "" );
    }

    return (
        <>
            <LoginForm />
        </>
    )
}

export default LoginPage
