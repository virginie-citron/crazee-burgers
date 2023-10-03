import React from 'react'
import LoginForm from './LoginForm';
import styled from 'styled-components';
import Logo from '../../reusable-ui/Logo';


function LoginPage() {



    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
background: red;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  
`;



export default LoginPage
