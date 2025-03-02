import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";
import { selectCars, selectIsLoading, selectError } from "../../redux/selectors";
import CarCard from "../CarCard/CarCard";
import FilterBox from "../FilterBox/FilterBox";
import css from "./CarCatalog.module.css";

const CarCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [filters, setFilters] = useState({ brand: "", rentalPrice: "", minMileage: "", maxMileage: "" });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 

  useEffect(() => {
    dispatch(fetchCars({ limit: 12, page })); 
  }, [dispatch, page]);

  const handleSearch = () => {
    setPage(1);
    dispatch(fetchCars({ limit: 12, page: 1, ...filters }));
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const brands = [...new Set(cars.map(car => car.brand))];
  const prices = [...new Set(cars.map(car => car.rentalPrice))].sort((a, b) => a - b);

  return (
    <div>
      <FilterBox filters={filters} setFilters={setFilters} brands={brands} prices={prices} onSearch={handleSearch} /> 

      <div className={css.carCatalog}>
        {isLoading && <p>Loading...</p>}
        {error && <p>❌ {error}</p>}
        {cars.length === 0 && !isLoading && <p>No cars found</p>}
        {cars.map((car) => <CarCard key={car.id} car={car} />)}
      </div>

 
      {hasMore && !isLoading && (
        <div className={css.loadMoreContainer}>
          <button className={css.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CarCatalog;