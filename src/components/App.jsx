import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header/Header.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CarDetailPage = lazy(() => import("../pages/CarDetailPage/CarDetailPage.jsx"));

function App() {
  return (
    <div>
      <Header /> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CarDetailPage />} />
         </Routes>
      </Suspense>
    </div>
  );
}

export default App;