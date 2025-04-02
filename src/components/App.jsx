import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.jsx";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";

// import { requestСars,  } from "../redux/operations.js";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CatalogDetailsPage = lazy(() =>
  import("../pages/CatalogDetailsPage/CatalogDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(requestСars());
  // }, [dispatch]);

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
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
