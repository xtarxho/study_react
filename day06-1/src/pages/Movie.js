import react from "react";

function Movie(props){

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

    return(
        <div className="movie-container">
            
            <img src={IMG_BASE_URL + props.poster_path}/>

            <div className="movie-info">
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>

        </div>
    )
}

export default Movie;