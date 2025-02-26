export const filterCars = (cars, { brand, rentalPrice, minMileage, maxMileage }) => {
    return cars.filter(car => {
      const matchesBrand = brand ? car.brand.toLowerCase() === brand.toLowerCase() : true;
      const matchesPrice = rentalPrice ? Number(car.rentalPrice) <= Number(rentalPrice) : true;
      const matchesMinMileage = minMileage ? Number(car.mileage) >= Number(minMileage) : true;
      const matchesMaxMileage = maxMileage ? Number(car.mileage) <= Number(maxMileage) : true;
  
      return matchesBrand && matchesPrice && matchesMinMileage && matchesMaxMileage;
    });
  };