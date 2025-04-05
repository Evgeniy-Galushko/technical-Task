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
    totalPage: null,
    isloading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(filterСars.pending, handlePending)
      .addCase(filterСars.fulfilled, (state, action) => {
        console.log(action.payload.totalPages);
        state.isloading = false;
        state.error = null;
        state.items = action.payload;

        // if (action.payload.totalPages > 1) {
        //   state.items.cars = [...state.items.cars, ...action.payload.cars];
        // }
      })
      .addCase(filterСars.rejected, handleRejected);
  },
});

export default filtersSlice.reducer;
