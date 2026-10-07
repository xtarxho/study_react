import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <Header title="Welcome" body='hello web'/>
      <Header title="Welcome2" body='hello web2'/>
      <Contents />

      <hr />

      <MyHeader ti='React Hello'/>

      <MyList/>



    </div>
  );
}

//컴포넌트라고 부른다
function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.body}
    </div>
  );
}

function Contents() {
  return (
    <div>
      <table border="1">
        <tr>
          <td colSpan="2">테이블</td>
        </tr>

        <tr>
          <td>메뉴1</td>
          <td>메뉴2</td>
        </tr>
      </table>
    </div>
  )
}

function MyHeader(props) {
  return (
    <header>
      <h1><a href='/'>{props.ti}</a></h1>
    </header>
  )
}

function MyList() {
  return (
    <nav>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
    </nav>
  )
}

export default App;
