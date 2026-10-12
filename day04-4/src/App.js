import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('등록')
  const [list, setList] = useState([])
 
  const [genre, setGenru] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [platform, setPlatform] = useState('')


  return (
    <div>
      <input type='button' value='등록' onClick={()=> setMode('등록')}/>
      <input type='button' value='리스트' onClick={()=> setMode('리스트')}/>
      <h1>게임 등록</h1>
      <p>장르 <select>
        <option>선택</option>
        <option>액션</option>
        <option>RPG</option>
        <option>FPS</option>
        </select></p>

        <p>제목 <input value={title} onChange={(e)=>setTitle(e.target.vlaue)}/></p>

        <p>출시일 <input type='date'/></p>

        <p>플랫폼 <input /></p>
        <input type='button' value='추가' onClick={addList()}/>
    </div>
  );
}

export default App;
