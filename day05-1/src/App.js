import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import { useState } from 'react';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Home from './components/Home';

function App() {


  const [movies, setMovies] = useState([])

  const removeMovie = (id) => {

    setMovies(movies.filter((movie) => movie.id !== id))

  }


  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie movie={movie}
        removeMovie={removeMovie} />
    )
  }) : '등록된 영화가 없습니다'

  const addMovie = (movie) => {
    setMovies([...movies, movie])
  }

  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        <Routes>

          <Route path='/movies'
            element={

              <div>
                <h1>Movie list</h1>
                <MovieForm addMovie={addMovie} />
                {renderMovies}
              </div>

            } />

            <Route path='/users'
                  element={<Users/>}/>

            <Route path='/' element={<Home/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
