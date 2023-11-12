import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import { get_loading_started, get_loading_ended } from './loadingSlice'
const initialState = {
  arrPhim: [],
};

export const getAllMovieApi = createAsyncThunk(
  "phim/getAllMovieApi",
  async (_, { dispatch }) => {
    // console.log(thunkAPI);
    try {
      // mình gọi cho loading xuất hiện
      dispatch(get_loading_started());
      const res = await quanLyPhimServ.getAllMovie();
      // khi gọi dữ liệu thành công sẽ use get_loading_ended để tắt loading
      dispatch(get_loading_ended());
      // console.log(res);
      // khi return về 1 gtri thì gtri này sẽ đc gửi lên store
      return res.data.content;
    } catch (error) {
      dispatch(get_loading_ended());
      console.log(error);
    }
  },
  // {
  //   condition: (_, { getState, extra }) => {
  //     // console.log(getState);
  //     const { loadingSlice } = getState();
  //     console.log(loadingSlice.get_loading_started);

  //   },
  // }
);

const phimSlice = createSlice({
  name: "phim",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getAllMovieApi.pending, (state, action) => {

    // });
    builder.addCase(getAllMovieApi.fulfilled, (state, action) => {
      // console.log(current(state));
      // console.log(action);
      // payload là kqua trả về của return khi use thunk
      state.arrPhim = action.payload;
    });
    // builder.addCase(getAllMovieApi.rejected);
  },
});

export const { } = phimSlice.actions;

export default phimSlice.reducer;
