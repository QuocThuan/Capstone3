import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { quanLyPhimServ } from "../../services/quanLyPhim";

const initialState = {
  arrPhim: [],
};

export const getAllMovieApi = createAsyncThunk(
  "phim/getAllMovieApi",
  async (_, thunkAPI) => {
    console.log(thunkAPI);
    const res = await quanLyPhimServ.getAllMovie();
    console.log(res);
    // khi return về 1 gtri thì gtri này sẽ đc gửi lên store
    return res.data.content;
  }
);

const phimSlice = createSlice({
  name: "phim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getAllMovieApi.pending);
    builder.addCase(getAllMovieApi.fulfilled, (state, action) => {
      console.log(current(state));
      console.log(action);
      // payload là kqua trả về của return khi use thunk
      state.arrPhim = action.payload;
    });
    // builder.addCase(getAllMovieApi.rejected);
  },
});

export const { getInfoUser } = phimSlice.actions;

export default phimSlice.reducer;
