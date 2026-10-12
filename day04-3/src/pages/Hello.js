import React from "react";
import { useParams } from "react-router-dom";

function Hello(){

    const {param1, param2} = useParams()

    return(
        <div>
            <h2>동적 파라미터</h2>
            <p>
                파라미터1 : <strong>{param1} / {param2}</strong>
            </p>
        </div>
    )
}

export default Hello;