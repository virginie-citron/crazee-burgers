import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";

import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";


export default function LoginForm() {
  const [ inputValue, setInputValue ] = useState( "" );
  const handleChange = ( event ) => {
    setInputValue( event.target.value );
  };

  const navigate = useNavigate();
  const handleSubmit = ( event ) => {
    event.preventDefault();
    setInputValue( "" );
    navigate( `order/${ inputValue }` );
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous </h2>
      <div>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom ..."}
          required
          Icon={<BsPersonCircle className="icon" />}
        />
        <Button
          label={"Accédez à votre espace"}
          Icon={<IoChevronForward className="icon" />}
        />

      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
text-align: center;
text-align: center;
max-width: 500px;
min-width: 400px;
margin: 0px auto;
padding: 2.5rem ${ theme.spacing.lg };
border-radius: ${ theme.borderRadius.round };
font-family: "Amatic SC", cursive;
hr{
  border: 1.5px solid ${ theme.colors.loginLine };
  margin-bottom:${ theme.gridUnit * 5 }px;
}
h1{
color: ${ theme.colors.white };
font-size:${ theme.fonts.size.P5 };
}
h2{
  margin: 20px 10px 10px;
  color: ${ theme.colors.white };
  font-size: ${ theme.fonts.size.P4 };
}
.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${ theme.fonts.size.P0 };
  margin-left: 10px;
}
`;
