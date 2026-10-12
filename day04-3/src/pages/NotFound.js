import React from "react";
import { Link } from "react-router-dom";

function NotFound(){

    return(
        <div>
            <h2>404</h2>
            <p>존재하지 않는 경로입니다</p>
            <Link to='/'>홈으로</Link>
        </div>
    )

}

export default NotFound;