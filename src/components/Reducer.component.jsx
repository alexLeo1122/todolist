


export const TasksReducer = (tasks,action) =>{
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