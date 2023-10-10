
import styled from "styled-components";
import NavbarRigthSide from "./NavbarRigthSide";
import Logo from "/src/components/reusable-ui/Logo.jsx"
import { theme } from "../../../../theme";

export default function Navbar( { username } ) {



    return (
        <NavbarStyled>
            <Logo />
            <NavbarRigthSide username={username} />
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
background: ${ theme.colors.white };
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
border-top-left-radius:${ theme.borderRadius.extraRound };
border-top-right-radius:${ theme.borderRadius.extraRound };
border-bottom: 1px solid ${ theme.colors.greyLight };

.left-side{
background: pink;
}
`;