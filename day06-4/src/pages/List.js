import axios from "axios";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {

    // https://jsonplaceholder.typicode.com/todos/
    const [todos, setTodos] = useState([])

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then((res) => {
                setTodos(res.data)
            })

    }, [])

    return (
        <div>
            <h1>할 일 목록</h1>

            <ul>
                {
                    todos.map((todo) => (
                        <li>
                            <Link to={'/detail/' + todo.id}
                                state={{ todo: todo }}>
                                {todo.id} - {todo.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List