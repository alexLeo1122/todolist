import React from 'react';
// import {  useReducer } from 'react';
import { TaskLists } from './components/TaskLists.component';
import { AddTask } from './components/AddTask.component';
import { TasksArea } from './components/TasksContext.component';
import {initialTasks} from './components/data.component.jsx';
import './App.css';


const  App= ()=> {
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



export default App;
