import { useSelector, useDispatch } from 'react-redux';
import { onInputChange, selectInpValue } from './inputSlice';
import { addTask, fetchTaskListsAsync } from '../task-lists/task-lists.slice';
import { useState } from 'react';


import styles from "./input.module.css"





export const InputField = () => {
  const [inpValue,setInpValue] = useState("");
  const dispatch = useDispatch();
  const addTaskHandler = (e) =>{
    e.preventDefault();
    inpValue.length>0&& dispatch(addTask(inpValue));
    setInpValue("");
  }
  const handleInputChange = (e)=>{
    e.preventDefault();
    setInpValue(e.target.value);
  }
  const fetchAsync = ()=>{
    dispatch({type:"fetchTaskListsAsync"});
  }
  return (
    <>        
        <form onSubmit={addTaskHandler}>
        <input
        className={styles.textboxField}
        value={inpValue} placeholder="input" 
        onChange={handleInputChange}        
        />
        <button>Add</button>

        </form>
        <button onClick={fetchAsync}> Add Task async</button>
     
    </>

  );
};


