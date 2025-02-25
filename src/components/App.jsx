

import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.jsx";
import CarDetailPage from "../pages/CarDetailPage/CarDetailPage.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CarDetailPage />} />
        <Route path="favorites" element={<div>Favorites Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;