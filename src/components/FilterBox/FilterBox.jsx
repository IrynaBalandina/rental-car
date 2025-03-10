import css from './FilterBox.module.css';

const FilterBox = ({ filters, setFilters, brands = [], prices = [], onSearch }) => { 
  const handleFilterChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    onSearch(); 
  };

  return (
    <div className={css.filterBox}>

      <div className={css.brandField}>
        <p className={css.brandName}>Car brand</p>
        <select className={css.brandSelect}
          name="brand" 
          value={filters.brand || ""} 
          onChange={handleFilterChange}>
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

    
      <div>
        <p className={css.rentalPrice}>Price/1 Hour</p>
        <select className={css.priceSelect}
          name="rentalPrice" 
          value={filters.rentalPrice || ""} 
          onChange={handleFilterChange}>
          <option value="">All Prices</option>
          {prices.map((price) => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
      </div>

 
      <div>
        <p className={css.mileageCount}>Car mileage</p>
        <div className={css.mileageWrapper}>
          <input 
            className={`${css.mileageInput} ${css.mileageLeft}`}
            type="number" 
            name="minMileage" 
            placeholder="From" 
            value={filters.minMileage || ""} 
            onChange={handleFilterChange}
          />
       
          <input 
            className={`${css.mileageInput} ${css.mileageRight}`}
            type="number" 
            name="maxMileage" 
            placeholder="To" 
            value={filters.maxMileage || ""} 
            onChange={handleFilterChange}
          />
        </div>
         
   
      </div>

  
      <button className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterBox;

