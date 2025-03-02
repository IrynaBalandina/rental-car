import { useNavigate } from "react-router-dom";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };

  // 🔹 Виділяємо місто та країну (беремо 2 останніх слова)
  const addressParts = car.address.split(", ");
  const shortAddress = addressParts.slice(-2).join(", ");

  return (
    <div className={css.carCard}>
      <img className={css.imgCar} src={car.img} alt={`${car.brand} ${car.model}`} />
      <h3 className={css.brand}>{car.brand} {car.model} {car.year}</h3>
      <p className={css.price}>{car.rentalPrice} $</p>
      <p className={css.address}>{shortAddress}</p> 
      <p className={css.rental}>{car.rentalCompany}</p>
      <p>{car.mileage.toLocaleString()} km</p>

      <button className={css.readMoreBtn} onClick={handleClick}>
        Read more
      </button>
    </div>
  );
};

export default CarCard;