import { Link, useParams } from "react-router-dom";


export default function Orderpage() {
    // state
    const { username } = useParams();


    return (
        <div>
            <h1>Bonjour {username}</h1>
            <Link to="/"><button>Déconnexion</button></Link>
        </div>
    )
}
