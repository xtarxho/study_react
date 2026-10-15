import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/main_content' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
