import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [user, setUser] = useState([])


  //유저추가 함수
  const addUser = () => {
    if (name.trim() && age.trim()) {
      setUser([...user, { name, age }])
      setName('')
      setAge('')
    }
  }

  //사용자 삭제 함수
  const delUser = (index)=>{
    let newUser = user.filter((_, i)=> i !== index)
    setUser(newUser)
  }

  return (
    <div>
      <input placeholder='이름을 입력하세요' value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
      <input placeholder='나이을 입력하세요' value={age} onChange={(e) => { setAge(e.target.value) }} />
      <input type='button' value='확인' onClick={addUser} />

      <br />

      <table border='1'>
        <thead>
          <tr>
            <th>순번</th>
            <th>이름</th>
            <th>나이</th>
            <th>비고</th>
          </tr>
        </thead>

        <tbody>
          {
            user.map((u, index)=>(
              <tr>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>
                  <input type='button' value="삭제" onClick={ ()=>delUser(index)}/>
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>


    </div>
  );
}

export default App;
