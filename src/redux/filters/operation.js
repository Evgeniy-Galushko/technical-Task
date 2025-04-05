import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const filterСars = createAsyncThunk(
  "cars/requestAll",
  async (request, thunkAPI) => {
    try {
      const data = await axios.get(
        `/cars?limit=12&page=${request.page}&${request.filterLine}`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
