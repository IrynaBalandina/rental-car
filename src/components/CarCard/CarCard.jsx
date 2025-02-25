import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.img} alt={`${car.brand} ${car.model}`} />
      <h3>{car.brand} {car.model}</h3>
      <p>Ціна: {car.rentalPrice} $</p>
      <p>Пробіг: {car.mileage.toLocaleString()} km</p>
      <Link to={`/catalog/${car.id}`}>Read more</Link>
    </div>
  );
};

export default CarCard;
