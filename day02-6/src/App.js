import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [selColor, setColor] = useState('black')
  let [mFont, setFont] = useState('black')

  let changeBack = function (event) {

    let color = event.target.value

    if (color === 'yellow') {
      setFont('black')
    } else {
      setFont('white')
    }

    setColor(color)

  }

  return (
    <div>

      <select onChange={changeBack}>
        <option value=''>:::색상선택:::</option>
        <option value='red'>빨강</option>
        <option value='blue'>파랑</option>
        <option value='green'>초록</option>
        <option value='yellow'>노랑</option>
      </select>


      <div id='exam_div' style={{background:selColor, color:mFont}} >
        
        {selColor}
      </div>

    </div>



  );
}

export default App;
