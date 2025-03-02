import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global"; 


export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ limit = 12, page = 1, ...filters }, thunkAPI) => {
    try {
      console.log("Отримуємо авто:", { limit, page, filters }); 
      const response = await axios.get(`${BASE_URL}/cars`, { params: { limit, page, ...filters } });
    
      return response.data.cars;
    } catch (error) {
 
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (carId, thunkAPI) => {
    try {
   
      const response = await axios.get(`${BASE_URL}/cars/${carId}`);
    
      return response.data;
    } catch (error) {
     
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchCarsByBrand = createAsyncThunk(
  "cars/fetchCarsByBrand",
  async (brand, thunkAPI) => {
    try {
    
      const response = await axios.get(`${BASE_URL}/cars`, { params: { brand } });
     
      return response.data.cars;
    } catch (error) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);