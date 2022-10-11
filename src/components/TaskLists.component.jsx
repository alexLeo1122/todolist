import { useState } from "react"





export const TaskLists = ({tasks, onDelete, onEditTask}) => {
    return (
        <>
            {   tasks.map((task) =>
                    (
                        <div key={task.id} id={task.id}>
                            <TaskArea task={task} onEditTask={onEditTask}/>
                            <button id={task.id} onClick={onDelete}>Delete</button>
                        </div>
                    )
              )  } 
        </>
        
    )
}

export const TaskArea = ({task, onEditTask}) =>{
    const [isEditing, setIsEditing] = useState(false);
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
                                onEditTask({
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
                            onEditTask({
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