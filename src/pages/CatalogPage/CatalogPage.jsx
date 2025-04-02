import { useSelector, useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter.jsx";
import s from "./CatalogPage.module.css";
import {
  selectBrands,
  selectCars,
  selectError,
} from "../../redux/selectors.js";
import { requestСars, requestBrands } from "../../redux/operations.js";
import { useEffect } from "react";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const brands = useSelector(selectBrands);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(requestСars());
    dispatch(requestBrands());
  }, [dispatch]);

  console.log(cars);
  console.log(brands);

  return (
    <div className={s.sectionCatalog}>
      <Filter brands={brands} />
    </div>
  );
}
