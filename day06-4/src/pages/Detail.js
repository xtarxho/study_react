import react from "react";
import { useLocation, useParams } from "react-router-dom";

function Detail(){

    const {id} = useParams()
    const location = useLocation()
    const todo = location.state.todo


    return(
        <div>
            <p>ID : {id}</p>
            <p>제목 : {todo.title}</p>
            <p>완료 여부 : {todo.completed ? '완료' : '미완료'}</p>
        </div>
    )
}

export default Detail