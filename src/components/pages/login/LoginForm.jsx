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
      <hr />
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
text-align: center;
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding: 2.5rem 2rem;
border-radius: 5px;
font-family: "Amatic SC", cursive;
hr{
  border: 1.5px solid #f56a2c;
  margin-bottom:40px;
}
h1{
color: white;
font-size: 48px;
}
h2{
  color: #8e8b8b;
  margin: 20px 10px 10px;
  color: white;
  font-size: 36px;
}


  
`;
