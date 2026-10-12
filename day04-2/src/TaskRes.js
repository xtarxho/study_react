import React from "react";

function TaskRes(props){
    return(
        <div>
            <table border='1'>
                <thead>
                    <th>할 일</th>
                    <th>마감일</th>
                    <th>비 고</th>
                </thead>

                <tbody>
                    {
                        props.todo.map((t, index)=>(
                            <tr>
                                <td>{t.task}</td>
                                <td>{t.due}</td>
                                <input type="button" value='삭제' onClick={()=> {props.delTask(index)}}/>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default TaskRes;