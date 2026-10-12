import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Hello from './pages/Hello';
import { useState } from 'react';
import MyPage from './pages/MyPage';

function App() {

  return (
    <BrowserRouter>

      <MyPage/>

    </BrowserRouter>
  );
}

export default App;
