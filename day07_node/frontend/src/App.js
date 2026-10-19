import './App.css'; //App 컴포넌트에 적용할 App.css파일을 불러온다
import Login from './pages/Login'; //로그인 컴포넌트를 불러온다
import {BrowserRouter, Route, Routes} from 'react-router-dom' // 페이지 이동에 필요한 라우팅 요소들
import Signup from './pages/Signup'; // 회원가입 컴포넌트를 불러온다
import MainPage from './pages/MainPage'; // 메인페이지 컴포넌트를 불러온다

//앱 컴포넌트 정의
function App() {
  return (
    <BrowserRouter> {/* 브라우저 주소를 이용한 페이지 이동을 관리한다 */}
      <Routes> {/* 페이지 경로들을 모아 놓는 역할을 한다 */}
        <Route path='/' element={<Login/>}/> {/* /주소에 접속하면 로그인 컴포넌트를 보여준다 */}
        <Route path='/signup' element={<Signup/>}/> {/* /signup주소에 접속하면 회원가입 컴포넌트를 보여준다 */}
        <Route path='/main_content' element={<MainPage/>}/> {/* /main_content주소에 접속하면 메인페이지 컴포넌트를 보여준다 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
