export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectCarById = (state) => state.cars.selectedCar;
export const selectBrands = (state) => state.cars.brands;