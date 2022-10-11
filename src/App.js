import React from 'react';
import { useState, useReducer,useContext } from 'react';
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
let count = 3;

export const TasksContext = React.createContext();
export const TasksArea = ({children,initialTasks}) => {
    // const [Tasks, setTasks] = useState(initialTasks);   
    const [tasks, dispatch] = useReducer(TasksReducer,initialTasks)
    console.log(tasks);
    const handleAddTask = (inputText) =>{   
      if(inputText.length === 0) return;
      count++;
      dispatch({
        type: "addTask",
        newTask: {id: count,
        name: inputText,
        done: false}
      });    
  }
  const handleEditTask = (newTask) =>{
      dispatch({
        type: 'editTask',
        newTask: newTask
      });
  }
  const handleDelete = (e) => {
      e.preventDefault();
      dispatch({
        type: "deleteTask",
        id: e.target.id
      });
  }
    return (
      <TasksContext.Provider value={{tasks, dispatch,handleAddTask,handleEditTask,handleDelete}}>
        {children}
      </TasksContext.Provider>
    )
  }
const  App= ()=> {
  // console.log({tasks})

  return (
    <TasksArea initialTasks={initialTasks}>

            <div className="App">
                {/* add task field */}
                <AddTask    />
                <TaskLists />      
            </div>
    </TasksArea>

  );
}

const TasksReducer = (tasks,action) =>{
  switch (action.type) {
    case "addTask":{
    return   [...tasks, action.newTask];        
    }
    case "editTask":{
      return  (
                tasks.map(oldTask=>{
                  if(oldTask.id===action.newTask.id){return action.newTask}
                  else{ return oldTask}
                })
         );     
      }   
    
    case "deleteTask":{     
      return tasks.filter(task =>task.id !== Number(action.id));      
    }
    default:{
      return tasks;
    }

  }

}

export default App;
