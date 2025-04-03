import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.jsx";
import { Suspense, lazy, useState } from "react";
import { RingLoader } from "react-spinners";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CatalogDetailsPage = lazy(() =>
  import("../pages/CatalogDetailsPage/CatalogDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const [color, setColor] = useState("#3470FF");

  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <RingLoader
            color={color}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="spiner"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
