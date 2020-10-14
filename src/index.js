import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"

import * as serviceWorker from './serviceWorker';

import Header from "./components/Header"
import Form from "./components/Form"
import TaskItem from "./components/Task-Item"


let tasks = [];
let count =0;


function getInputs(e){
    e.preventDefault();
    const value =e.target.elements.tasks.value;
    
    if(value)
    {
    tasks.push(value);
    console.log(tasks);
    App();
    e.target.elements.tasks.value ="";
    }
    else
    alert('Enter Task First')
}

const appRoot = document.getElementById('root');

function App(){

const template = (<div id="container">
        <Header />
        <Form test={getInputs}/>
        <div id="tasks-container">
        {tasks.length===0?<h1 style={{textAlign:'center'}}>No task available</h1>:tasks.reverse().map(cur=>{
            return  <TaskItem key={count++} taskText={cur}/>
          })}
        
        </div>
        </div>
    )

    ReactDOM.render(template, appRoot);
        
}


App();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
