import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        }
    }
});

const titleSlice=createSlice({
    name:"navTitle",
    initialState:{
        value:""
    },
    reducers:{
        setNavbarTitle:(state,action)=>{
        state.value=action.payload;
    }
}
});

export const {increment,decrement} = counterSlice.actions
export const {setNavbarTitle}=titleSlice.actions

export const titleReducer=titleSlice.reducer;
export const counterReducer=counterSlice.reducer;
