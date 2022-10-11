import { useState } from "react";


export const AddTask = ({handleAddTask}) => {
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