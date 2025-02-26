import css from "./FilterBox.module.css";

const FilterBox = ({ filters, setFilters, brands }) => {
  const handleFilterChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={css.filterBox}>

<div className={css.brandField}>
        <p>Car brand</p>
        <input
          className={css.brandInput}
          type="text"
          name="brand"
          list="brandOptions" // ✅ Прив'язуємо до <datalist>
          placeholder="Enter brand"
          value={filters.brand}
          onChange={handleFilterChange}
        />
        <datalist id="brandOptions"> {/* ✅ Випадаючий список брендів */}
          {brands.map((brand) => (
            <option key={brand} value={brand} />
          ))}
        </datalist>
      </div>



      <div>
        <input
          className={css.priceField}
          type="number"
          name="rentalPrice"
          placeholder="Choose a price"
          value={filters.rentalPrice}
          onChange={handleFilterChange}
        />
      </div>

 
      <div className={css.mileageFields}>
        <input
          className={css.mileageField}
          type="number"
          name="minMileage"
          placeholder="From"
          value={filters.minMileage}
          onChange={handleFilterChange}
        />
        <input
          className={css.mileageField}
          type="number"
          name="maxMileage"
          placeholder="To"
          value={filters.maxMileage}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default FilterBox;