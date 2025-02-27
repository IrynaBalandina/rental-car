import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../../api.js";
import css from "./CarDetailPage.module.css"; 

const CarDetailPage = () => {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const data = await getCarById(id);
        setCar(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>❌ {error.message}</p>;
  if (!car) return <p>Car not found</p>;

  return (
    <div className={css.carDetail}>
 
      <img src={car.img} alt={`${car.brand} ${car.model}`} className={css.carImage} />

  
      <div className={css.carInfo}>
        <h2>{car.brand} {car.model} ({car.year})</h2>
        <p>{car.address} Mileage: {car.mileage.toLocaleString()} </p>
        <p><strong> </strong> ${car.rentalPrice} </p>
        <p>{car.description}</p>
        
        <div className={css.rentalConditions}>
          <h3>Rental Conditions</h3>
          <ul>
            {car.rentalConditions.map((condition, index) => (
              <li key={index}>✅  {condition}</li>
            ))}
          </ul>
        </div>

        <div>
        <h3>Car Specifications</h3>

          <p><strong>📅 Year:</strong>{car.year}</p>
          <p><strong>🚗 Type:</strong> {car.type}</p>
          <p><strong>⛽ Fuel Consumption:</strong> {car.fuelConsumption} L/100km</p>
          <p><strong>🔧 Engine Size:</strong> {car.engineSize}</p>
        </div>

        <div className={css.features}>
        <div className={css.features}>
          <h3>Accessories and Functionalities</h3>
          <ul>
            {[...car.accessories, ...car.functionalities].map((feature, index) => (
              <li key={index}>✅  {feature}</li>
            ))}
          </ul>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CarDetailPage;