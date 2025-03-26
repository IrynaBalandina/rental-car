import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";
import { selectCars, selectIsLoading, selectError } from "../../redux/selectors";
import CarCard from "../CarCard/CarCard";
import FilterBox from "../FilterBox/FilterBox";
import Loader from "../Loader/Loader.jsx"
import css from "./CarCatalog.module.css";

const CarCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [filters, setFilters] = useState({ brand: "", rentalPrice: "", minMileage: "", maxMileage: "" });
  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState([]); 
  const [hasMore, setHasMore] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await dispatch(fetchCars({ limit: 12, page })).unwrap();
      
      if (data.length > 0) {
        setAllCars(prevCars => [...prevCars, ...data]); 
      } else {
        setHasMore(false); 
      }
    };

    fetchData();
  }, [dispatch, page]);

  const handleSearch = () => {
    setPage(1);
    setAllCars([]); 
    dispatch(fetchCars({ limit: 12, page: 1, ...filters })).then(({ payload }) => {
      setAllCars(payload); 
    });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const brands = [...new Set(allCars.map(car => car.brand))];
  const prices = [...new Set(allCars.map(car => car.rentalPrice))].sort((a, b) => a - b);

  return (
    <div>
      <FilterBox filters={filters} setFilters={setFilters} brands={brands} prices={prices} onSearch={handleSearch} /> 

      <div className={css.carCatalog}>
        {isLoading && page === 1 && <p><Loader/></p>}
        {error && <p>❌ {error}</p>}
        {allCars.length === 0 && !isLoading && <p>No cars found</p>}
        {allCars.map((car) => <CarCard key={car.id} car={car} />)}
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