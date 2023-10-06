import { Link } from "react-router-dom";
import styled from "styled-components";


export default function NavbarRigthSide( { username } ) {
    return (
        <NavbarRigthSideStyled >
            <h1>Bonjour {username}</h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </NavbarRigthSideStyled>
    )
}


const NavbarRigthSideStyled = styled.div`
background:violet;

`;