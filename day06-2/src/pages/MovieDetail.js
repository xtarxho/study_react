import react from "react";
import { useParams } from "react-router-dom";

function MovieDetail(){

    const{title, poster} = useParams();
    const BASE_PATH = "https://image.tmdb.org/t/p/w1280/";

    return(
        <div>
            <h2>{title}</h2>
            <img src={BASE_PATH + poster} width='300'/>
        </div>
    )
}

export default MovieDetail