import styled from "styled-components";
import { theme } from "../../theme/index"; // Utilisez la déstructuration pour obtenir l'objet theme



export default function Logo( { className } ) {
  return (
    <LogoStyled className={className}>
      <h1>CRAZEE</h1>
      <img src="/images/logo-orange.png" alt="logo-crazee-burger" />
      <h1>BURGER</h1>
    </LogoStyled> )
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  
h1{
    display: inline;
    text-align: center;
    color:${ theme.colors.primary };
    font-size: ${ theme.fonts.size.P4 };
    line-height: 1em;
    font-weight:${ theme.fonts.weights.bold };
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
} 

img {
object-fit:contain;
object-position: center;
height: 60px;
width: 80px;
margin:0 ${ theme.gridUnit / 2 }px;
} 
`