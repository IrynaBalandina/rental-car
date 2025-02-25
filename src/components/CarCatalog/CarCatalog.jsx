


import CarCard from "./CarCard";

const CarCatalog = ({cars}) => {

  return (
    <div className="car-catalog">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarCatalog;