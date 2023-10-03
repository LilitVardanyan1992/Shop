import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import sliderReducer from "../features/slices/sliderSlice";
import productReducer from '../features/slices/productsSlice';
import thunk  from "redux-thunk";;

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productReducer,
  },
},  applyMiddleware(thunk));


