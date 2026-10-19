// 회원가입 입력값 관리, 입력 이벤트 처리, 유효성 검사, 
// 서버에 데이터 전송, 페이지 이동이 들어있는 페이지

import React, { useState } from "react"; //react와 useState 불러오기
import { Link, useNavigate } from "react-router-dom"; // 페이지 이동을 위한 Link와 useNavigation 불러오기
import Signupvali from "../commons/SignupVali"; //유효성 검사를 위한 컴포넌트 불러오기
import axios from 'axios'; //서버에 http 요청을 보내기 위한 axios 불러오기

//회원가입 컴포넌트 정의
function Signup() {

    const navi = useNavigate() //원하는 주소로 이동할 수 있는 함수

    //회원 정보 담아주는 역할을 한다
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    // const [errors, setErrors] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        // setErrors(Signupvali(values))

        const bError = Signupvali(values);

        if (!bError) {
            return;
        }

        axios.post('/signup', values)
            .then(res => {
                alert("가입성공");
                navi('/')
            })
    }

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>회원가입</h2>

            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label>이름</label>
                    <input placeholder="enter name"
                        onChange={handleInput}
                        name="name" />
                </div>
                <div className="email">
                    <label>이메일</label>
                    <input placeholder="enter name"
                        onChange={handleInput}
                        name="email" />
                </div>
                <div className="pwd">
                    <label>비밀번호</label>
                    <input placeholder="enter password"
                        type="password"
                        onChange={handleInput}
                        name="password" />
                </div>

                <button type="submit">가입완료</button>

                <p>계정이 있으신가요?</p>
                <Link to='/'>로그인</Link>

            </form>
        </div>
    )
}

export default Signup