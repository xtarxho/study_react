import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Signupvali from "../commons/SignupVali";
import axios from 'axios';

function Signup() {

    const navi = useNavigate()

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(Signupvali(values))

        if(!errors){
            return;
        }

        axios.post('http://localhost:3000/signup', values)
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