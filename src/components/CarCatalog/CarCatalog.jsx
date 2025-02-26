import { useEffect, useState } from "react";
import { getCars } from "../../api.js"; 
import { filterCars } from "../../utils/fltersCars.js"; 
import CarCard from "../CarCard/CarCard.jsx";
import FilterBox from "../FilterBox/FilterBox.jsx"; 
import css from "./CarCatalog.module.css";

const CarCatalog = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({ brand: "", rentalPrice: "", minMileage: "", maxMileage: "" });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const data = await getCars({ limit: 10, page }); 
        
        if (data && data.cars) {
          setCars(prevCars => [...prevCars, ...data.cars]); 
          setHasMore(data.cars.length > 0);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Помилка завантаження авто:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [page]);

 
  useEffect(() => {
    setFilteredCars(filterCars(cars, filters));
  }, [filters, cars]);


  const brands = [...new Set(cars.map(car => car.brand))];

  return (
    <div>
   
      <FilterBox filters={filters} setFilters={setFilters} brands={brands} /> 
      
      <div className={css.carCatalog}>
        {filteredCars.length === 0 && !loading && <p>Not found</p>}

        {filteredCars.map((car) => <CarCard key={car.id} car={car} />)}

        {loading && <p>Loading...</p>}

        {hasMore && !loading && (
          <button className={css.loadMoreBtn} onClick={() => setPage(prev => prev + 1)}>
       Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CarCatalog;