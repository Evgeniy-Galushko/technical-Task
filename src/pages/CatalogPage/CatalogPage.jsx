import { useSelector, useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter.jsx";
import s from "./CatalogPage.module.css";
import {
  selectBrands,
  selectCars,
  selectLoading,
} from "../../redux/selectors.js";
import { requestСars, requestBrands } from "../../redux/operations.js";
import { useEffect } from "react";
import ListOfCars from "../../components/ListOfCars/ListOfCars.jsx";
import LoadMoreBtn from "../../components/BuuttonLoad/LoadMoreBtn.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(requestСars());
    dispatch(requestBrands());
  }, [dispatch]);

  // console.log(cars);

  return (
    <div className={s.sectionCatalog}>
      <Filter brands={brands} />
      <ListOfCars cars={cars.cars} />
      <LoadMoreBtn>Load more</LoadMoreBtn>
    </div>
  );
}
