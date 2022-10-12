import { useState, useContext } from "react";
import { TasksContext } from "./TasksContext.component";





export const TaskLists = () => {
    const {tasks,handleDelete} =  useContext(TasksContext);
    return (
        <>
            {   tasks.map((task) =>
                    (
                        <div key={task.id} id={task.id}>
                            <TaskArea task={task}/>
                            <button id={task.id} onClick={handleDelete}>Delete</button>
                        </div>
                    )
              )  } 
        </>
        
    )
}

export const TaskArea = ({task}) =>{
    const [isEditing, setIsEditing] = useState(false);
    const {handleEditTask} =  useContext(TasksContext);

    return (
        <>     
            { 
                isEditing === false ?
                <>  
                    <input 
                        type="checkbox"
                        checked={task.done} 
                        onChange={(e)=>
                            {
                                handleEditTask({
                                    ...task,
                                    done: !task.done
                                    });
                            }
                        }                    
                    />
                    <span>{task.name}{' '}</span>
                    <button onClick={()=>setIsEditing(true)}>Edit</button>
                </>
                :
                <>
                    <input type="text" value={task.name}
                        checked ={false}
                        onChange={(e) => {
                            handleEditTask({
                            ...task,
                            name: e.target.value
                            });
                        }}
                    />
                    <button onClick={()=>setIsEditing(false)}>Save</button>

                </>
                
                
                }
    
        </>
    )
}