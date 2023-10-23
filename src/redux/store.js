import { configureStore } from "@reduxjs/toolkit";
import nguoiDungSlice from "./slices/nguoiDungSlice";
import phimSlice from "./slices/phimSlice";

export const store = configureStore({
  reducer: {
    // hoTen: () => {
    //   return "Laika";
    // },
    nguoiDungSlice,
    phimSlice,
  },
});
