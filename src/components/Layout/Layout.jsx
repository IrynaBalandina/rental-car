import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"; // ✅ Додаємо Outlet

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>

      <main>
        <Outlet /> 
      </main>

      <footer>
        <p>&copy; 2025 Car Rental Company</p>
      </footer>
    </div>
  );
};

export default Layout;