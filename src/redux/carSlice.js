import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById, fetchCarsByBrand } from "./operations";

const initialState = {
  items: [],
  selectedCar: null,
  brands: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

   
      .addCase(fetchCarsByBrand.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsByBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload;
      })
      .addCase(fetchCarsByBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;