import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [cnt, setCnt] = useState(0)
  let [msg, setMsg] = useState('')

  function changeNum(e){
    setCnt(e.target.value)
  }

  function evenodd(){
    if( cnt === 0 ){
      setMsg('현재 카운트는 0입니다')
    }else if( cnt % 2 === 0 ){
      setMsg('현재 카운트는 짝수입니다')
    }else{
      setMsg('현재 카운트는 홀수입니다')
    }
  }

  return (
    <div>

      <input type='button' value='-' onClick={(event)=>{setCnt(cnt - 1)}}/>
      <input type='button' value='0' onClick={(event)=>{setCnt(0)}}/>
      <input type='button' value='+' onClick={(event)=>{setCnt(cnt + 1)}}/>
      <input type='button' value='짝수/홀수 확인' onClick={evenodd}/>
      <input id='my_text' value={cnt} onChange={changeNum} size='3'/>


      <p>
        <span>{cnt}</span> <br/>
        {msg}
      </p>

    </div>
  );
}

export default App;
