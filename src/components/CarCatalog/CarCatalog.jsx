import { useEffect, useState } from "react";
import { getCars } from "../../api.js"; 
import CarCard from "../CarCard/CarCard.jsx";

const CarCatalog = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars({ limit: 10, page: 1 }); 
        setCars(data.cars); 
      } catch (error) {
        console.error( error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="car-catalog">
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        cars.map((car) => <CarCard key={car.id} car={car} />)
      )}
    </div>
  );
};

export default CarCatalog;