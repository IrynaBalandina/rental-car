import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../../api.js";

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

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>❌ Помилка: {error.message}</p>;
  if (!car) return <p>Авто не знайдено</p>;

  return (
    <div className="car-detail">
      <img src={car.img} alt={`${car.brand} ${car.model}`} />
      <h2>{car.brand} {car.model} ({car.year})</h2>
      <p>{car.description}</p>
      <p><strong>Ціна:</strong> ${car.rentalPrice} / день</p>
      <p><strong>Пробіг:</strong> {car.mileage.toLocaleString()} km</p>
    </div>
  );
};

export default CarDetailPage;