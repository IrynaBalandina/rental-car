import { Link } from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
    <div className={css.linksContainer}>


  <Link className={css.logoLink} to = "/">
  <img src="/icons/Logo.svg" alt="logo"  />
  </Link>
  <nav className={css.navLink}>
    <ul className={css.carLink}>
        <li>
          <Link  to="/">Home</Link>
          </li>
          <li>
          <Link  to="/catalog">Catalog</Link>
          </li>
          </ul>  
        </nav>
    </div>
    </header>
  )
}

export default Header;