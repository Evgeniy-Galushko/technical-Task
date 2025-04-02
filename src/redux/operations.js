import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const requestСars = createAsyncThunk(
  "cars/requestAll",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("/cars");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestСarsId = createAsyncThunk(
  "cars/requestAll",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("/cars");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestBrands = createAsyncThunk(
  "cars/requestBrands",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("/brands");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
