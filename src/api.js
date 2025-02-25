import axios from "axios";

const API_BASE_URL = "https://car-rental-api.goit.global";


export const getCars = async ({ brand, rentalPrice, minMileage, maxMileage, limit, page }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars`, {
      params: { brand, rentalPrice, minMileage, maxMileage, limit, page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
};


export const getCarById = async (carId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cars/${carId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching car details for ID ${carId}:`, error);
    throw error;
  }
};