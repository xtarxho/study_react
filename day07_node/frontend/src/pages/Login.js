import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "../commons/LoginValidation";
import axios from "axios";

function Login() {

    //페이지 이동 기능을 navi 변수에 저장
    const navi = useNavigate();

    //이메일과 비밀번호를 저장할 values 변수와 setValues를 통해
    //입력값을 변경하게 도와준다
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    // const [errors, setErrors] = useState()

    //로그인을 도와주는 함수이다 
    // true면 로그인 성공하고 실패하면 아무것도 일어나지 않는다
    const handleSubmit = (e) => {
        //새로고침 방지
        e.preventDefault();
        // setErrors(LoginValidation(values));

        //입력한 이메일과 비밀번호가 올바른지 검사한다
        const bError = LoginValidation(values);

        //결과가 false라면 실행하지 않는다
        if (!bError) {
            return;
        }

        //서버의 로그인 처리 주소로 이메일과 비밀번호를 보낸다
        axios.post('/login', values)
            //요청이 성공적으로 되면 실행
            .then(res => {

                //서버에 로그인 성공이라고 응답했는지 확인한다
                //성공했으면 로그인 성공 창과 메인 페이지로 이동하면서 이름과 이메일을 전달한다
                //틀리면 경고창을 띄운다
                if (res.data.result === "success") {
                    alert("로그인 성공")
                    navi('/main_content', {
                        state: {
                            name: res.data.name,
                            email: res.data.email
                        }
                    })
                } else {
                    alert("아이디나 비밀번호를 확인하세요")
                }

            })

    }

    //로그인 창에서 이메일이나 비밀번호를 입력하면, 입력한 값을 values에 저장하고
    //기존에 입력한 값은 유지하는 역할을 한다
    const handleInput = (e) => {
        setValues({
            ...values,
            //새로 입력한 값을 해당 항목에 저장한다
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>

            <h2>로그인</h2>

            {/* 이메일과 비밀번호를 입력하고 로그인은 클릭하면 
            handleSubmit 함수가 실행되고 로그인에 성공하면 
            메인 페이지가 나오게 해준다    
            */}
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label>Email</label>
                    <input placeholder="enter email"
                        name="email"
                        onChange={handleInput} />
                </div>
                <div className="pwd">
                    <label>Password</label>
                    <input placeholder="enter password"
                        type="password"
                        name="password"
                        onChange={handleInput} />
                </div>

                <button className="btn-login"
                    type="submit">
                    로그인
                </button>

                {/* 계정이 없으면 회원가입을 눌러서 회원가입 페이지로 이동시켜준다 */}
                <p>계정이 없으신가요?</p>
                <Link to='/signup'>
                    회원가입
                </Link>

            </form>
        </div>
    )
}

export default Login