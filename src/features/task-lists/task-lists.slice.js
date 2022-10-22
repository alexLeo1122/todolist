import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';
export const fetchUrl ="https://63539e56ccce2f8c02f9cc80.mockapi.io/api/tdapp/v1/tasks"

export const FetchTasksAsync = createAsyncThunk("tasks/Fetching",
  async(fetchUrl)=>{    
      let data = await fetch(fetchUrl);
      let data2 = await data.json(); 
      return data2;
  }
)


const taskFormat = {
    text: "",
    done: false,
    id: 0,
    isEditing: false,
}

const initialState = {
  tasks: [],
  taskIdCount:0  
};


export const taskListsSlice = createSlice({
  name: 'taskLists',
  initialState,
  reducers: {
    addTask: (state,action) => {
      state.taskIdCount++; 
      const newTask ={id:state.taskIdCount, text:action.payload, done:false, isEditing:false}
      state.tasks.push(newTask);
    },
    deleteTask: (state,action)=>{      
      state.tasks = state.tasks.filter(task=>task.id!==action.payload.id);
    },
    editTask: (state,action)=>{
      const {id,text} = action.payload;
      state.tasks.find(task=>task.id===id)['text']=text;
    },
    toggleTaskEditing: (state,action)=>{
      const  {id, isEditing} =action.payload;
      state.tasks.find(task=>task.id===id)['isEditing']=isEditing;
    },
    toggleTaskStatus: (state,action)=>{       
      // console.log({action})
      state.tasks.find(item=> item.id===action.payload.id)['done']=action.payload['done'];
  },
  },

  extraReducers: (builder) => {
    builder.addCase(FetchTasksAsync.pending, (state, action) => {
      
      return state ;
    })
    builder.addCase(FetchTasksAsync.fulfilled, (state, action) => {
  state.tasks = action.payload;
    })
  },

});

export const { addTask,toggleTaskStatus, deleteTask, editTask, toggleTaskEditing } = taskListsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTaskLists = (state) => state.taskLists.tasks;

export default taskListsSlice.reducer;
