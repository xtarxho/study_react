import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [greet, setGreet] = useState('')
  let [msg, setMsg] = useState('나는 행복합니다')

  function handleName(e) {
    e.preventDefault()

    let name = e.target.myname.value

    //템플릿 리터럴(Template Literal)
    //문자열을 보다 쉽게 조합할 수 있도록 하는 문법
    setGreet(`안녕하세요 ${name}님! 오늘의 기분은?`)

    // setGreet('안녕하세요 ' + name + '님! 오늘의 기분은?')

  }

  function moodChange(e) {
    let mood = e.target.value
    if (mood === '행복') {
      setMsg('나는 행복합니다')
    } else if (mood === '슬픔') {
      setMsg('나는 슬픕니다')
    } else {
      setMsg('나는 화납니다')
    }
  }

  return (
    <div>
      <form onSubmit={handleName}>
        <input name='myname' placeholder='이름을 입력하세요' />
        <input type='submit' value='인사하기' />
      </form>

      <h2>{greet}</h2>

      <MyMood mood={moodChange}/>

      <h3>{msg}</h3>

    </div>
  );
}

function MyMood({mood}) {
  return (
    <div>
      <select onChange={mood}>
        <option value='행복'>행복</option>
        <option value='슬픔'>슬픔</option>
        <option value='화남'>화남</option>

      </select>
    </div>
  )
}

export default App;
