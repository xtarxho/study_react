import logo from './logo.svg';
import './App.css';

//html 영역이라고 볼 수 있다
function App() {

  //script 영역이라고 볼 수 있다
  let name = '홍길동'

  function hello() {
    return "안녕하세요"
  }


  //body 영역이라고 볼 수 있다
  return (
    <div>
      <h1>{name} / {hello()}</h1>

      <Test title='React'
        onChangeMode={function () { alert('나는 header') }} />

      {/* 이벤트 1 */}
      <Test2 title='Hello'
        myChangeMode={function (id) { alert('id : ' + id) }} />
      
      {/* 이벤트 2 */}
      <Test2 title='Hello'
        myChangeMode={ (id) => { alert('id : ' + id) }} />

    </div>
  );
}

function Test2(props) {
  return (
    <div>
      <ul>
        <li>
          <a id='1' href='/'
              onClick={function(event){
                event.preventDefault();
                props.myChangeMode(event.target.id)
              }}>
          {props.title}
        </a>
      </li>

    </ul>
    </div >
  )
}

//자식태그는 무조건 1개
function Test(props) {
  return (
    <div>
      <h1>
        <a href='/' onClick={function () { alert("클릭함") }}>{props.title}</a>
      </h1>

      <h1>
        <a href='/'
          onClick={function (event) { //보통 e라고 작성한다
            //a태그의 기본기능을 막는다
            event.preventDefault();
            props.onChangeMode()
          }}>
          {props.title}
        </a>
      </h1>

    </div>
  )
}

export default App;
