import { useNavigate } from "react-router-dom";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };


  const addressParts = car.address.split(", ");
  const shortAddress = addressParts.slice(-2).join(", ");

  return (
    <div className={css.carCard}>
      <img className={css.imgCar} src={car.img} alt={`${car.brand} ${car.model}`} />
      <h3 className={css.brand}>{car.brand} <span className={css.carModel}>{car.model}</span> {car.year} {car.rentalPrice}$</h3>

      <p className={css.address}>{shortAddress} {car.rentalCompany}</p> 
    
      <p className={css.carMileage}>{car.type} {car.mileage.toLocaleString()} km</p>

      <button className={css.readMoreBtn} onClick={handleClick}>
        Read more
      </button>
    </div>
  );
};

export default CarCard;