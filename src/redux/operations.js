import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global"; 


export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ limit = 12, page = 1, brand, minMileage, maxMileage, minPrice, maxPrice }, thunkAPI) => {
    try {
      console.log("Отримуємо авто з фільтрами:", { limit, page, brand, minMileage, maxMileage, minPrice, maxPrice });

      const params = { limit, page };

      if (brand) params.brand = brand;
      if (minMileage) params.minMileage = minMileage;
      if (maxMileage) params.maxMileage = maxMileage;
      if (minPrice) params.minPrice = minPrice;
      if (maxPrice) params.maxPrice = maxPrice;

      const response = await axios.get(`${BASE_URL}/cars`, { params });
      
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