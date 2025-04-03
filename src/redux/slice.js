import { createSlice } from "@reduxjs/toolkit";
import { requestСars, requestСarId, requestBrands } from "./operations.js";

const handlePending = (state) => {
  state.isloading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    brands: [],
    carId: {},
    isloading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(requestСars.pending, handlePending)
      .addCase(requestСars.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(requestСars.rejected, handleRejected)
      .addCase(requestСarId.pending, handlePending)
      .addCase(requestСarId.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.carId = action.payload;
      })
      .addCase(requestСarId.rejected, handleRejected)
      .addCase(requestBrands.pending, handlePending)
      .addCase(requestBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(requestBrands.rejected, handleRejected);
  },
});

export default carsSlice.reducer;
