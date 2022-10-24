import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { onChangeHandler, selectInpValue } from './inputSlice';
import { FetchTasksAsync, selectTaskLists } from './task-lists.slice';
import { Task } from './task/task.component';
// import styles from "./task-list.module.css";
import { fetchUrl } from './task-lists.slice';



export const TaskLists = () => {
  const dispatch = useDispatch();
  const taskLists = useSelector(selectTaskLists);

  useEffect(()=>{
    console.log(">>TaskList/useEf started")
    dispatch({type:"fetchTaskListsAsync"});
    console.log(">>TaskList/useEf finished")

  },[]);

  return (
    <>        
           {taskLists&& taskLists.map(task=>  (<Task key={task.id} task={task} /> ))}
    </>

  );
};


