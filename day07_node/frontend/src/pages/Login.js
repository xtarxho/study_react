import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "../commons/LoginValidation";
import axios from "axios";

function Login() {

    const navi = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(LoginValidation(values));

        if(!errors){
            return;
        }

        axios.post('http://localhost:3000/login', values)
            .then(res => {

                if(res.data.result === "success"){
                    alert("로그인 성공")
                    navi('/main_content', {state:{name:res.data.name}})
                }else{
                    alert("아이디나 비밀번호를 확인하세요")
                }

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

            <h2>로그인</h2>

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

                <p>계정이 없으신가요?</p>
                <Link to='/signup'>
                    회원가입
                </Link>

            </form>
        </div>
    )
}

export default Login