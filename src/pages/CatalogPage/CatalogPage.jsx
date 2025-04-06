import { useSelector, useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter.jsx";
import s from "./CatalogPage.module.css";
import {
  selectBrands,
  selectCars,
  selectLoading,
} from "../../redux/cars/selectors.js";
import { requestСars, requestBrands } from "../../redux/cars/operations.js";
import { useEffect, useState } from "react";
import queryString from "query-string";
import ListOfCars from "../../components/ListOfCars/ListOfCars.jsx";
import LoadMoreBtn from "../../components/BuuttonLoad/LoadMoreBtn.jsx";
import { filterСars } from "../../redux/filters/operation.js";
import { selectFiltersCars } from "../../redux/filters/selectors.js";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const [arrayCars, setArrayCars] = useState([]);
  const cars = useSelector(selectCars);
  const filterCars = useSelector(selectFiltersCars);
  const brands = useSelector(selectBrands);
  const [page, setPage] = useState(1);

  const car = arrayCars.length === 0 ? cars.cars : filterCars.cars;
  const pagess =
    arrayCars.length === 0 ? cars.totalPages : filterCars.totalPages;

  useEffect(() => {
    dispatch(requestСars(page));
    dispatch(requestBrands());
  }, [dispatch, page]);

  const handleSubmit = (values, actions) => {
    if (
      values.brand.length === 0 &&
      values.maxMileage.length === 0 &&
      values.maxMileage.length === 0 &&
      values.rentalPrice.length === 0
    ) {
      dispatch(requestСars(page));
      return;
    }
    setArrayCars([]);
    const filterLine = queryString.stringify(values);
    dispatch(filterСars({ page, filterLine }));
    setArrayCars(filterCars.cars);

    actions.resetForm();
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <div className={s.sectionCatalog}>
      <Filter brands={brands} handleSubmit={handleSubmit} />
      <ListOfCars cars={car} />
      {pagess > page && (
        <LoadMoreBtn handleClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </div>
  );
}
