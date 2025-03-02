import { useNavigate } from "react-router-dom";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };



  return (
    <div className={css.carCard}>
      <img className={css.imgCar} src={car.img} alt={`${car.brand} ${car.model}`} />
      <h3 className={css.brand}>
  <span className={css.carDetails}>
    {car.brand} <span className={css.carModel}>{car.model}</span> {car.year}
  </span>
  <span className={css.price}>{car.rentalPrice}$</span>
</h3>

<p className={css.addressRental}>
  {car.address.split(", ").slice(-2).join(" | ")} | {car.rentalCompany}
</p>
    
      <p className={css.carMileage}>{car.type} {car.mileage.toLocaleString()} km</p>

      <button className={css.readMoreBtn} onClick={handleClick}>
        Read more
      </button>
    </div>
  );
};

export default CarCard;