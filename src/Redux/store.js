import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CoffeeSlice from "./Slices/CoffeeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import CounterSlice from "./Slices/CounterSlice";

const rootReducer = combineReducers({
coffees: CoffeeSlice,
number: CounterSlice
});

const persistConfig = {
key: "root",
version: 1,
storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
reducer: persistedReducer,
});
