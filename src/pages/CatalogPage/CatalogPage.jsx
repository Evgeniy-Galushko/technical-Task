import { useSelector, useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter.jsx";
import s from "./CatalogPage.module.css";
import { selectBrands, selectCars } from "../../redux/cars/selectors.js";
import { requestСars, requestBrands } from "../../redux/cars/operations.js";
import { useEffect, useState } from "react";
import ListOfCars from "../../components/ListOfCars/ListOfCars.jsx";
import LoadMoreBtn from "../../components/BuuttonLoad/LoadMoreBtn.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const brands = useSelector(selectBrands);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(requestСars(page));
    dispatch(requestBrands());
  }, [dispatch, page]);

  const handleClick = () => {
    setPage(page + 1);
  };
  console.log(cars);

  return (
    <div className={s.sectionCatalog}>
      <Filter brands={brands} />
      <ListOfCars cars={cars.cars} />
      {cars.totalPages > page && (
        <LoadMoreBtn handleClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </div>
  );
}
