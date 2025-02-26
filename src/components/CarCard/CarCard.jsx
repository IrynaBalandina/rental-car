import { Link } from "react-router-dom";
import css from './CarCard.module.css';


const CarCard = ({ car }) => {
  return (
    <div className={css.carCard}>
      <img className={css.imgCar} src={car.img} alt={`${car.brand} ${car.model} `} />
      <h3 className={css.brand}>{car.brand} {car.model} {car.year} </h3>
      <p className={css.price}>{car.rentalPrice} $</p>
      <p className={css.address}>{car.address}</p>
      <p className={css.rental}>{car.rentalCompany}</p>
      <p>{car.mileage.toLocaleString()} km</p>
      <Link to={`/catalog/${car.id}`}>Read more</Link>
    </div>
  );
};

export default CarCard;
