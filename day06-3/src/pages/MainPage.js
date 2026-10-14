import React from "react";
import { useLocation, useParams } from "react-router-dom";

function MainPage(){

    // let {email} = useParams()

    //Router에서 페이지 이동 정보를 가져온다
    let location = useLocation();
    let email = location.state.email;
    let name = location.state.name;
    let age = location.state.age;


    return(
        <div>
            {email} / {name} / {age}님 환영합니다
        </div>
    )
}

export default MainPage;