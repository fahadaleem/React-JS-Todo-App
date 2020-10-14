import React from "react"



function Form(props){
    return(
        <form onSubmit={props.test} id="text-field">
        <input type="text" name="tasks" placeholder="Enter Your Task" id="task-input">
        </input>
        <button type="submit" id="submit-btn">Submit</button>
        </form>
    )
}



export default Form