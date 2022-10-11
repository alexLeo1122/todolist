import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "../App";

export const AddTask = () => {
    
    const {handleAddTask} = useContext(TasksContext);   
  const [inputText,setInputText] = useState('');

    return (
        <>
            <form 
            onSubmit={(e)=> {
                    e.preventDefault();
                    setInputText('');
                    handleAddTask(inputText);
                }}>
                <input  onChange={(e)=>{setInputText(e.target.value)}} type='text' placeholder='Add task' value={inputText}/>
                <button >Add</button>  
            </form>
        
        </>
    )
}