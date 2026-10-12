import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TaskRes from './TaskRes';

function App() {

  const [task, setTask] = useState('')
  const [due, setDue] = useState('')
  const [todo, setTodo] = useState([])

  function addTask(){
    let datePatt = /^\d{4}-\d{2}-\d{2}$/
    if( task.trim() && datePatt.test(due) ){
      setTodo([...todo, {task, due}])
    }else{
      alert("내용을 채우세요");
    }
  }

  function delTask(index){
    const newTask = todo.filter((_, i)=> i !== index)
    setTodo(newTask)
  }

  return (
    <div>
      <input placeholder='할 일' value={task} onChange={(e)=> setTask(e.target.value)}/> <br/>
      <input placeholder='마감일(예: 2025-09-20)' value={due} onChange={(e)=> setDue(e.target.value)}/>
      <input type='button' value='추가' onClick={addTask}/>

      <br/>

      <TaskRes todo={todo} delTask={delTask}/>


    </div>
  );
}

export default App;
