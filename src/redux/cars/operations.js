import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const requestСars = createAsyncThunk(
  "cars/requestAll",
  async (page, filter, thunkAPI) => {
    try {
      const data = await axios.get(`/cars?limit=12&page=${page}&${filter}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestСarId = createAsyncThunk(
  "cars/requestСarId",
  async (id, thunkAPI) => {
    try {
      const data = await axios.get(`/cars/${id}`);
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
