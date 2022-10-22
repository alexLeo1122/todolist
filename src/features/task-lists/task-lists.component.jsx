import { useSelector, useDispatch } from 'react-redux';
// import { onChangeHandler, selectInpValue } from './inputSlice';
import { selectTaskLists } from './task-lists.slice';
import { Task } from './task/task.component';
// import styles from "./task-list.module.css";




export const TaskLists = () => {

   const taskLists = useSelector(selectTaskLists);
  //  console.log(taskLists)

  return (
    <>        
           {taskLists.map(task=>  (<Task key={task.id} task={task} /> ))}
    </>

  );
};


