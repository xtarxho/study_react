import logo from './logo.svg';
import './App.css';
import {dummy} from './movieDummy';
import Movie from './pages/Movie';


function App() {
  return (
    <div className="App">
      <div className='app-container'>
        {
          dummy.results.map((item)=>(
            <Movie title={item.title}
                   poster_path={item.poster_path}
                   vote_average={item.vote_average}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
