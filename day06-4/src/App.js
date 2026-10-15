import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
