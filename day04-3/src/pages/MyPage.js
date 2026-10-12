import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Hello from "./Hello";
import NotFound from "./NotFound";

function MyPage() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    //클릭 등의 이벤트 작업 없이 원할때 자동으로 페이지를 전환
    const navi = useNavigate();

    function myParams() {
        if (name.trim() && age.trim()) {
            navi('/hello/' + name + '/' + age)
        }
    }

    return (

        <div className='app'>

        <input value={name} onChange={(e)=> {setName(e.target.value)}} placeholder='이름을 입력하세요'/> <br/>

        <input type='number' value={age} placeholder='나이를 입력하세요' onChange={(e)=> {setAge(e.target.value)}}/>

        <button onClick={myParams}>확인</button>

        <header className='app-header'>
          <h1>React Router 연습</h1>

          <nav className='nav'>
            <Link to='/'>홈</Link>
            <Link to='/about'>소개</Link>
            <Link to='/hello/guest/hong'>Hello(guest)</Link>
            
            <a href='https://www.naver.com' target='_blank'>네이버</a>

          </nav>
        </header>

        <main className='app-main'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/hello/:param1/:param2' element={<Hello/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>

      </div>

    )
}

export default MyPage;