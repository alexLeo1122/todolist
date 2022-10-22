import { createSlice } from "@reduxjs/toolkit"



//inititalstae
//reducer
//actioncreator
//selector
const initialState = {
    value: ""
}


export const inputSlice =  createSlice({
    name:"input",
    initialState,
    reducers: {
        onInputChange: (state,action)=>{
            state.value = action.payload
        }
    }
});


export const {onInputChange} = inputSlice.actions;

//selector
export const selectInpValue = (state) => state.inputValue.value;

export default inputSlice.reducer;