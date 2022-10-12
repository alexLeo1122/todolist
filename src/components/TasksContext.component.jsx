import React, {useReducer} from 'react';
import {initialTasks} from './data.component'
import { TasksReducer } from './Reducer.component';


let count = initialTasks.length;
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
        newTask: {
              id: count,
              name: inputText,
              done: false
          }
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