import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputPage from './pages/InputPage';
import ListPage from './pages/ListPage';

function App() {

  const [list, setList] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ 
          <InputPage list={list} setList={setList}/> 
        }/>     

        <Route path='/list' 
               element={ <ListPage list={list} setList={setList}/> }/> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
