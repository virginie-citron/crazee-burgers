import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";


export default function NavbarRigthSide( { username } ) {
    return (
        <NavbarRigthSideStyled >
            {/* <div className="admin-button">Admin Button</div> */}
            <Profile username={username} />
        </NavbarRigthSideStyled>
    )
}


const NavbarRigthSideStyled = styled.div`
border: 3px solid black ;
display:flex;
align-items: center;
padding-right: 50px;



.admin-button{
    background: lightblue;
}
.profile{
    background: yellow;
}

`;