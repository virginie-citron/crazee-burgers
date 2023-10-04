import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";


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
      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          type="text"
          placeholder="Entrez votre prénom ..."
          required="true"
          value={input}
          onChange={handleChange}
        />
      </div>
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

.input-with-icon{
  border: 1px solid red;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center; 
  padding: 18px 24px;
  margin: 18px 0;
  .icon{
  color:#93a2b1;
  font-size: 15px;
  margin-right: 8px;
}
input{
  border: none;
  font-size: 15px;
  color:#17161a;
}
&::placeholder{
  background-color: white;
  color: lightgrey;
}

}
`;
