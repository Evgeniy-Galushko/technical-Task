import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { selectCarId } from "../../redux/selectors.js";
import { requestСarId } from "../../redux/operations.js";
import s from "./CatalogDetailsPage.module.css";

export default function CatalogDetailsPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const oneCar = useSelector(selectCarId);

  const {
    accessories,
    address,
    brand,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    img,
    mileage,
    model,
    rentalCompany,
    rentalConditions,
    rentalPrice,
    type,
    year,
  } = oneCar;
  const addres = address.split(",");

  console.log(oneCar);

  const backLinkHref = useRef(location.state ?? `/catalog`);

  const { id } = useParams();
  useEffect(() => {
    dispatch(requestСarId(id));
  }, [dispatch, id]);

  return (
    <div className={s.detailsPage}>
      <div className={s.detailsPageDivImg}>
        <img src={img} alt={brand} className={s.detailsPageImg} />
      </div>
      <div className={s.detailsPageDivModel}>
        <h2>
          {brand} {model}, {year}
        </h2>
        <div className={s.addresDiv}>
          <p>
            {addres[1]}, {addres[2]}
          </p>
          <p>Mileage: {mileage} km</p>
        </div>
        <p>&#x24;{rentalPrice}</p>
        <p>{description}</p>
      </div>
      <div className={s.carCharacteristics}>
        <div>
          <h3>Rental Conditions: </h3>
          <p>{rentalConditions[0]}</p>
          <p>{rentalConditions[2]}</p>
          <p>{rentalConditions[1]}</p>
        </div>
        <div>
          <h3>Car Specifications: </h3>
          <p>Year: {year}</p>
          <p>Type: {type}</p>
          <p>Fuel Consumption: {fuelConsumption}</p>
          <p>Engine Size: {engineSize}</p>
        </div>
        <div>
          <h3>Accessories and functionalities: </h3>
          <p>{accessories[0]}</p>
          <p>{accessories[1]}</p>
          <p>{accessories[2]}</p>
        </div>
      </div>
    </div>
  );
}
