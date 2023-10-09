import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import { theme } from "../../../theme/index";


export default function OrderPage() {
    // state
    const { username } = useParams();


    return (
        <OrderpageStyled>
            <div className="container">
                <Navbar username={username} />
                <Main />
            </div>
        </OrderpageStyled>
    )
}


const OrderpageStyled = styled.div`
background:${ theme.colors.primary };
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.container {
background: red;
height:95vh;
width: 1400px;
display: flex;
flex-direction: column;
border-radius: ${ theme.borderRadius.extraRound };

}
`;