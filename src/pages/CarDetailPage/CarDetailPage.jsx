import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/operations";
import { selectCarById, selectIsLoading, selectError } from "../../redux/selectors";
import css from "./CarDetailPage.module.css"; 

const CarDetailPage = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const car = useSelector(selectCarById);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", comment: "" });

  useEffect(() => {
    if (id) {
      dispatch(fetchCarById(id)); 
    }
  }, [dispatch, id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🚗 Бронювання успішне! Дякуємо, ${formData.name}!`);
    setFormData({ name: "", email: "", phone: "", comment: "" }); 
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>❌ {error}</p>;
  if (!car) return <p>Car not found</p>;

  return (
    <div className={css.carDetail}>
      <div className={css.leftSection}>
        <img src={car.img} alt={`${car.brand} ${car.model}`} className={css.carImage} />

        <form className={css.bookingForm} onSubmit={handleSubmit}>
          <h3>Book your car now</h3>
          <p className={css.textForm}>Stay connected! We are always ready to help you.</p>
          <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleInputChange} 
          required />
          <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleInputChange} 
          required />
          <input 
  type="date" 
  name="date" 
  className={css.dateInput} 
  value={formData.date} 
  onChange={handleInputChange} 
  required 
/>
          <input 
          type="text" 
          name="comment" 
          placeholder="Comment" 
          value={formData.comment} 
          onChange={handleInputChange} />
          <div className={css.buttonContainer}>
    <button type="submit">Send</button>
  </div>
        </form>
      </div>

      <div className={css.carInfo}>
        <h2>{car.brand} {car.model} ({car.year})</h2>
        <p>{car.address} Mileage: {car.mileage.toLocaleString()} km</p>
        <p> <span className={css.priceCar}>${car.rentalPrice}</span> </p>
        <p className={css.description}>{car.description}</p>
        
        <div className={css.rentalConditions}>
          <h3>Rental Conditions</h3>
          <ul>
  {car.rentalConditions.map((condition, index) => (
    <li key={index} className={css.conditionItem}>
      <img src="/icons/check-circle.svg" alt="Check Icon"  />
      {condition}
    </li>
  ))}
</ul>
        </div>

        <div className={css.carSpecifications}>
          <h3>Car Specifications</h3>
          <p className={css.yearInfo}>
            <img src="/icons/calendar.svg" alt="Check Icon" />
            Year: {car.year}</p>
          <p className={css.typeInfo}>
            <img src="/icons/car.svg" alt="Car Icon" />
             Type: {car.type}</p>
          <p className={css.fuelInfo}>
            <img src="/icons/fuel-pump.svg" alt="Fuel Icon" />
             Fuel Consumption: {car.fuelConsumption} L/100km</p>
          <p className={css.engineInfo} >
            <img src="/icons/gear.svg" alt="Gear Icon" />
             Engine Size: {car.engineSize}</p>
        </div>

        <div className={css.features}>
          <h3>Accessories and Functionalities</h3>
          <ul>
            {[...car.accessories, ...car.functionalities].map((feature, index) => (
              <li key={index} className={css.conditionItem}> <img src="/icons/check-circle.svg" alt="Check Icon"  />{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;