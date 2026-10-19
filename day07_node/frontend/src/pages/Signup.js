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

    //회원가입 실행할 함수를 정의한다
    const handleSubmit = (e) => {
        e.preventDefault() //페이지의 새로고침을 막아주는 역할을 한다
        // setErrors(Signupvali(values))

        //입력값을 검사하고 결과를 bError에 저장한다
        const bError = Signupvali(values);

        //거짓이면 서버 요청을 실행하지 않는다
        if (!bError) {
            return;
        }

        //signup 주소로 values값을 전송하고 성공하면 .then을 실행한다
        //가입 성공을 화면에 띄우고 로그인 페이지로 이동한다.
        axios.post('/signup', values)
            .then(res => {
                alert("가입성공");
                navi('/')
            })
    }

    //회원가입에 성공한 정보를 ...values에 저장한다.
    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h2>회원가입</h2> {/* 회원가입 제목 표시 */}

            {/* 가입완료 버튼을 누르면 handleSubmit 실행 */}
            <form onSubmit={handleSubmit}>
                {/* 이름, 이메일, 비밀번호를 정확하게 입력하고 가입완료를 누르면 각각 values. 에 저장된다 */}
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

                {/* 계정이 있을 경우 로그인 페이지로 이동시켜준다 */}
                <p>계정이 있으신가요?</p>
                <Link to='/'>로그인</Link>

            </form>
        </div>
    )
}

export default Signup