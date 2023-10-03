import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function LoginForm() {
  const [ input, setInput ] = useState( "" );
  const handleChange = ( event ) => {
    setInput( event.target.value );
  };

  const navigate = useNavigate();
  const handleSubmit = ( event ) => {
    event.preventDefault();
    setInput( "" );
    navigate( `order/${ input }` );
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez vous </h2>
      <input
        type="text"
        placeholder="Entrez votre prénom ..."
        required="true"
        value={input}
        onChange={handleChange}
      />
      <button>Accédez à votre espace </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
background: green;
display: flex;
flex-direction: column;

  
`;
