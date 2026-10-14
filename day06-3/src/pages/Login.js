import React, { useState } from "react";
import MainPage from "./MainPage";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import {User} from '../userDummy';

function Login() {

    

    const navi = useNavigate();

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [emailValid, setEmailValid] = useState(false)
    const [pwValid, setPwValid] = useState(false)
    const [isLogin, setLogin] = useState(false)

    const handleEmail = (e) => {

        setEmail(e.target.value)

        if (e.target.value === '') {
            setEmailValid(false)
        } else {
            setEmailValid(true)
        }

    }

    const handlePw = (e) => {

        setPw(e.target.value)

        if (e.target.value === '') {
            setPwValid(false)
        } else {
            setPwValid(true)
        }
    }

    const myConfirm = () => {

        //사용자가 입력받은 id, pw정보와 
        //일치하는 인원을 더미데이터에서 가져온다
        const loginUser = User.find(
            (user) => user.email === email
        )

        if (!loginUser) {
            alert("이메일을 확인하세요")
        } else if (loginUser.pw !== pw) {
            alert("비밀번호 불일치")
        } else {
            alert("로그인 성공")
            // setLogin(true)
            // navi('/login/' + email)
            navi('/login', 
                {state:{email:loginUser.email, 
                        name:loginUser.name,
                        age:loginUser.age}})
        }

    }



    return (
        <div>

            <LoginForm email={email}
                handleEmail={handleEmail}
                emailValid={emailValid}
                pw={pw}
                handlePw={handlePw}
                pwValid={pwValid}
                myConfirm={myConfirm} />

        </div>
    )
}

export default Login