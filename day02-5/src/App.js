import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [level, setLevel] = useState('light')

  let exer = {
    light: {
      title: '산책',
      desc: '가볍게 몸풀기'
    },
    medium: {
      title: '조깅',
      desc: '가장 적당한 운동'
    },
    hard: {
      title: 'HIT',
      desc: '짧고 강한 운동'
    }
  }

  let selected = exer[level]

  /* 
  JSON(javascript object nitation) 표기법 
  서로 다른 플랫폼간 데이터를 교환하기 위한 약속된 표기방식
  */

  let json = { 'name': '홍길동', 'age': 30, 'tel': '010-111' }
  let j_arr = [
    { 'name': '일길동', 'age': 30 },
    { 'name': '이길동', 'age': 26 },
    { 'name': '삼길동', 'age': 40 }
  ]

  let course = {
    'name': '개발자 과정',
    'start': '26-01-01',
    'end': '27-01-01',
    'sub': ['java', 'jsp', 'spring'],
    'student': [
      { 'name': '홍길동', 'age': 20 },
      { 'name': '김길동', 'age': 30 }
    ]
  }

  return (
    <div>

      <div>
        {json.name} / {json.age} / {json.tel}
      </div>

      <div>
        {j_arr[1].name} / {j_arr[1].age}
      </div>

      <div>
        과정명 : {course.name} <br/>
        시작일 : {course.start} <br/>
        종료일 : {course.end} <br/>
        과목 : {course.sub[0]} / {course.sub[1]} / {course.sub[2]}<br/>
        학생들 : {course.student[1].name} / {course.student[1].age}
      </div>


      <hr />

      <h2>오늘 할 운동</h2>

      <div>
        <input type='button' value='가벼운 운동'
          onClick={() => { setLevel('light') }} />

        <input type='button' value='중간강도 운동'
          onClick={() => { setLevel('medium') }} />

        <input type='button' value='고강도 운동'
          onClick={() => { setLevel('hard') }} />

      </div>

      <div>
        <h3>{selected.title}</h3>
        <p>{selected.desc}</p>
      </div>

    </div>
  );
}

export default App;
