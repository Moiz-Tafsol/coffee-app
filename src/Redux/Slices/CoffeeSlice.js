import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coffee: []
}
export const CoffeeSlice = createSlice({
    name: 'Coffee',
    initialState,
    reducers: {
        addCoffee: (state, action) => {
            const existingCoffee = state.coffee.find(coffee => coffee.id === action.payload.id);
            
            if (!existingCoffee) {
                state.coffee.push({
                    id: action.payload.id,
                    image: action.payload.image,
                    name: action.payload.name,
                    price: action.payload.value,
                    number: action.payload.num
                });
            }
            else {
                if (action.payload.num === 0) {

                    state.coffee = state.coffee.filter((item) => item.id !== action.payload.id)
                }
                else {

                    existingCoffee.number = action.payload.num;
                }
            }
        },
        removeCoffee: (state, action) => {

            state.coffee = state.coffee.filter((item) => item.id != action.payload)
        },
    }
});

export const { addCoffee, removeCoffee } = CoffeeSlice.actions

export default CoffeeSlice.reducer