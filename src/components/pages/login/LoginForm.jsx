import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function LoginForm() {

    const [ input, setInput ] = useState( "" );
    const handleChange = ( event ) => {
        setInput( event.target.value )
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();
        alert( `Bonjour
         ${ input }` );
        setInput( "" );
    }




    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous </h2>
            <input
                type="text"
                placeholder='Entrez votre prénom ...'
                required="true"
                value={input}
                onChange={handleChange}
            />
            <button>Accédez à votre espace </button>
            <Link to="/order">Vers OrderPage</a>
        </form>

    )
}
