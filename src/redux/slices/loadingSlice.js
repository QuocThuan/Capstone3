import { createSlice, current } from "@reduxjs/toolkit";

// initalState
const initialState = {
    count: 0,
    isActive: false,
};

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        get_loading_started: (state) => {
            state.isActive = true;
            // count = 1; count = 2
            state.count++;
        },
        get_loading_ended: (state) => {
            state.count--;
            if (state.count == 0) {
                state.isActive = false;
            }
        }
    },
});

export const { get_loading_started, get_loading_ended } = loadingSlice.actions;

export default loadingSlice.reducer;
