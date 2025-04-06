import { createSlice } from "@reduxjs/toolkit";
import { filterСars } from "./operation.js";

const handlePending = (state) => {
  state.isloading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    items: [],
    isloading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(filterСars.pending, handlePending)
      .addCase(filterСars.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.items = action.payload;

        // if (state.items.length === 0) {
        //   state.items = action.payload;
        // } else {
        //   state.items.cars = [...state.items.cars, ...action.payload.cars];
        // }
      })
      .addCase(filterСars.rejected, handleRejected);
  },
});

export default filtersSlice.reducer;
