import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


export default function Orderpage() {
    // state
    const { username } = useParams();


    return (
        <OrderpageStyled>
            <div className="container">
                <h1>Bonjour {username}</h1>
                <Link to="/">
                    <button>Déconnexion</button></Link>
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
}



`;