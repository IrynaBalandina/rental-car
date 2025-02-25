import { Link } from "react-router-dom";
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>

<nav className={css.navLink}>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
        
        </nav>
    </div>
  )
}

export default Navigation;