import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputValue, setValue] = useState('')
  const [fruits, setFruits] = useState([])

  const addFruit = () => {

    if (inputValue.trim()) {

      // fruits배열에 기존 배열의 내용을 복사 (...fruits)후
      // 새로 추가하고자 하는 값을 등록(inputValue)
      setFruits([...fruits, inputValue])
      setValue('') //입력상자 초기화

    }

  }

  const delFruit = (index)=>{
    //filter함수는 배열을 순회하며 조건에 맞는 요소들만 골라서 새로운 배열을 만든다
    //(res, i) 에서 첫번째 인자인 res는 i번째 index에 해당하는 항목
    //두번째 인자 i는 현재 접근한 항목의 index이다.
    //사실 여기서는 res는 사용하지 않아도 된다. 그래서 res대신 _를 넣어도 된다.
    // let newFruits = fruits.filter( (res, i)=> i !== index )
    let newFruits = fruits.filter( (_, i)=> i !== index )
    setFruits(newFruits)
  }

  return (
    <div>
      <h1>과일 목록</h1>
      <input placeholder='과일이름' onChange={(e) => { setValue(e.target.value) }} value={inputValue} />

      <input type='button' value='확인' onClick={addFruit} />

      <ul>
        {

          fruits.map((f, index)=>(
            <li key={index}>{index} / {f} 
            <input type='button' value='삭제' onClick={()=>{ delFruit(index) }}/>
            </li>
          ))

        }
      </ul>

    </div>
  );
}

export default App;
