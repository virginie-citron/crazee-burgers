import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";


export default function Orderpage() {
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
background: orange;
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

}





`;