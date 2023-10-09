
import styled from "styled-components";
import NavbarRigthSide from "./NavbarRigthSide";
// import Logo from "../../../reusable-ui/Logo"
import Logo from "/src/components/reusable-ui/Logo.jsx"

export default function Navbar( { username } ) {



    return (
        <NavbarStyled>
            <Logo />
            <div className="left-side">Left Side</div>
            <NavbarRigthSide />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
background: blue;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;


.left-side{
background: pink;
}
`;