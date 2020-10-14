import React from "react"


function deleteTask(e){
    e.target.parentNode.parentNode.remove()
    console.log('Task Deleted!');
}


function TaskItem(props){
    return(
        <div className="task-item">
            <button onClick={deleteTask}><i className="fa fa-trash"></i></button>
            <label>{props.taskText}</label>
        </div>
    )
}



export default TaskItem;