import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Coffee_Num: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action) =>{

            const existingNum = state.Coffee_Num.find(coffee => coffee.id === action.payload.id);
            if(!existingNum){
                state.Coffee_Num.push({
                    id: action.payload.id,
                    number: 1
                })
            }
            else{
                existingNum.number += 1;
            }
        },
        decrement: (state, action) =>
        {
            const existingNum = state.Coffee_Num.find(coffee => coffee.id === action.payload.id);
            if(existingNum)
            {
                existingNum.number -= 1;
            }
        },
        Erase: (state, action) =>{
            
            const existingNum = state.Coffee_Num.find(coffee => coffee.id === action.payload.id);
            if(existingNum)
            {
                existingNum.number = 0;
            }
        }
    }
})

export const {increment, decrement, Erase } = counterSlice.actions;

export default counterSlice.reducer;