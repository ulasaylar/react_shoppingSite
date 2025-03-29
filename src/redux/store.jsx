import { configureStore } from "@reduxjs/toolkit";
import appReducer, { appSlice } from "../redux/slices/appSlice";
import productReducer from "../redux/slices/productSlice";
import basketSlice from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    basket: basketSlice,
  },
});
