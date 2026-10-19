import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function MainPage(){

    //이전 페이지에서 현재 페이지로 전달한 정보를 확인해주고
    //전달받은 이름과 이메일을 가져온다
    const location = useLocation()
    const name = location.state.name;
    const email = location.state.email;

    //로그인 페이지로 돌아가기 위한 기능을 해준다
    const navi = useNavigate();

    //탈퇴를 도와주는 역할을 한다 
    ///withdraw페이지로 이메일을 보내서 탈퇴를 요청한다
    const deleteMember = () => {
        axios.post('/withdraw', {email:email})
            .then(res => {

                //서버가 반환한 데이터가 success와 같으면 탈퇴 성공 메세지와 로그인 페이지로 돌아간다
                if( res.data == 'success' ){
                    alert("탈퇴 성공")
                    navi('/')
                }

            })
    }

    return(
        //로그인 성공시 {name}님 환영합니다라는 글을 보여준다
        //탈퇴 버튼을 클릭하면 deleteMember 함수가 실행된다
        <div>
            <h1>{name}님 환영합니다</h1>
            <button onClick={deleteMember}>탈퇴</button>
        </div>
    )
}

export default MainPage