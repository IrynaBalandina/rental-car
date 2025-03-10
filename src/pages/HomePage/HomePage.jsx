import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className={css.homePageWrapper}>
        <h1 className={css.homePageTitle}>Find your perfect rental car</h1>
        <p className={css.homePageText}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link className={css.homePageBtn} to={'/catalog'}>
          View Catalog
        </Link>
      </section>
  )
}

export default HomePage