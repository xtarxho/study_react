import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList/>}/>
        <Route path='/detail/:title/:poster'  element={<MovieDetail/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
