import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [mk, setMk] = useState([])

  //상품 등록
  const addMk = () => {
    if (name.trim() && price.trim()) {
      setMk([...mk, { name, price:Number(price) }])
      setName('')
      setPrice('')
    }
  }

  const delMk = (index) => {
    let newMk = mk.filter((_, i) => i !== index)
    setMk(newMk)
  }

  //총합 계산
  //reduce() : 배열에 들어있는 여러 값을 하나씩 꺼내오기 위한 함수
  let totalPrice = mk.reduce( (sum, m) => {
    return sum + m.price
  }, 0)

  return (
    <div>
      <h1>장바구니</h1>
      <input placeholder='상품명' value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
      <input placeholder='가격' value={price} type='number' onChange={(e) => { setPrice(e.target.value) }} />
      <input type='button' value='추가' onClick={addMk} />

      <hr/>

      <table border='1'>

        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>

        <tbody>
          {
            //map은 반복문과 같다 
            mk.map((m, index) => (
              <tr key={index}>
                <td>{m.name}</td>
                <td>{m.price}</td>
                <td>
                  <input type='button' value="삭제" onClick={() => delMk(index)} />
                </td>
              </tr>
            ))
          }
        </tbody>

      </table>

      <p>총 합 : {totalPrice}</p>

    </div >
  );
}

export default App;
