import React from 'react';
import { useState } from 'react';
import { TaskLists } from './components/TaskLists.component';

import './App.css';
import { AddTask } from './components/AddTask.component';

const initialTasks = [
  { 
    id: 1,
    name:'Learn FrontEnd',
    done: false
  }, 
  {
    id: 2,
    name:'Learn BackEnd',
    done: false
  },
  {
    id: 3,
    name:"Learn FullStack",
    done: false
  }
];
const  App= ()=> {
  const [count,setCount] = useState(initialTasks.length);
  const [tasks,setTasks] = useState(initialTasks);
  // const [inputText,setInputText] = useState('');

  console.log({tasks})
  // const handleOnChange = (e) =>{
  //   const text =e.target.value;
  //   setInputText(text);
  // }
  const handleAddTask = (inputText) =>{   
    if(inputText.length === 0) return;
    setCount(count+1);
    const newTask = {
      id: count +1,
      name: inputText,
      done: false
    };
    setTasks((tasks)=>{
     return [...tasks,
                newTask]
    });   
    
  }

  const handleEditTask = (newTask) =>{
    setTasks(
      tasks.map(oldTask=>{
        if(oldTask.id===newTask.id){return newTask}
        else{ return oldTask}
      })
    );
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const newTask = tasks.filter(task =>task.id !== Number(e.target.id));
    setTasks([...newTask]);
  }
  return (
    <div className="App">
        {/* add task field */}
        <AddTask     handleAddTask={handleAddTask}/>
        <TaskLists onEditTask={handleEditTask} tasks={tasks} onDelete={handleDelete} />      
    </div>
  );
}

export default App;
