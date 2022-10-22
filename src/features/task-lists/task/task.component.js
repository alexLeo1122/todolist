import { useSelector, useDispatch } from 'react-redux';
// import { onChangeHandler, selectInpValue } from './inputSlice';
import { deleteTask, selectTaskLists } from '../task-lists.slice';
// import { useDispatch } from 'react-redux';
import { toggleTaskStatus, editTask, toggleTaskEditing } from '../task-lists.slice';
import {onInputChange} from "../../inputField/inputSlice";

import {selectInpValue} from "../../inputField/inputSlice";
import { useState } from 'react';
import styles from "./task.module.css";
// import styles from "./task-list.module.css";




export const Task = ({task}) => {
  // console.log("task run")
  const {id, text, done, isEditing} = task;
  const [inpValue,setInpValue] = useState(text);
  // console.log({inpValue})
 const dispatch = useDispatch();
 const taskStatusHandler = ()=>{
  dispatch(toggleTaskStatus({id,done:!done}));
 }

 const deleteTaskHandler =()=>{
  dispatch(deleteTask({id}))
 }
 const handleInputChange = (e)=>{
  e.preventDefault();
  setInpValue(e.target.value);
 }
 const editTaskHandler =(e)=>{
  e.preventDefault();
  dispatch(editTask({id,text: inpValue}));
  dispatch(toggleTaskEditing({id,isEditing:!isEditing}));
 }
 const cancelEditTaskHandler =(e)=>{
  e.preventDefault();
  setInpValue(text);
  dispatch(toggleTaskEditing({id,isEditing:!isEditing}));
 }
 const toggleEditingHandler =()=>{
  dispatch(toggleTaskEditing({id,isEditing:!isEditing}))
 }
  return (
    <>        
        <div className={styles.task}>
          <input  className={styles.checkbox} type="checkbox" 
          checked={done}  onChange={taskStatusHandler}/>

          {isEditing===false?
          (
            <div className={styles.taskContent}>
            <p className={styles.text_field}>{text}</p>
            <button onClick={toggleEditingHandler}>Editing</button>
            </div>
          ):
          (
            <div className={styles.taskContent}>
              <input  className={styles.text_field} type="text" onChange={handleInputChange} value={inpValue}/>       
              <button onClick={editTaskHandler}>Save</button>
              <button onClick={cancelEditTaskHandler}>Cancel</button>

            </div>
          )
    }



           <button onClick={deleteTaskHandler}>X</button>
        </div>
    </>

  );
};


