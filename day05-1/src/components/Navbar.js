import react from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/movies">영화</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/users">유저</Link>
        </div>
    )
}

export default Navbar