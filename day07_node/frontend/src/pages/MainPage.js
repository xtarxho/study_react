import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MainPage(){

    const location = useLocation()
    const name = location.state.name;
    const email = location.state.email;

    const navi = useNavigate();

    const deleteMember = () => {
        axios.post('/withdraw', {email:email})
            .then(res => {

                if( res.data == 'success' ){
                    alert("탈퇴 성공")
                    navi('/')
                }

            })
    }

    return(
        <div>
            <h1>{name}님 환영합니다</h1>
            <button onClick={deleteMember}>탈퇴</button>
        </div>
    )
}

export default MainPage