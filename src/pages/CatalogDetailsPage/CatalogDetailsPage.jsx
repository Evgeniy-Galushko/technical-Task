import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { selectCarId, selectLoading } from "../../redux/cars/selectors.js";
import { requestСarId } from "../../redux/cars/operations.js";
import sprite from "../../img/icon-sprite.svg";
import s from "./CatalogDetailsPage.module.css";
import RentalForm from "../../components/RentalForm/RentalForm.jsx";
import { RingLoader } from "react-spinners";

export default function CatalogDetailsPage() {
  const dispatch = useDispatch();
  const oneCar = useSelector(selectCarId);
  const [color, setColor] = useState("#3470FF");
  const { id } = useParams();
  const spiner = useSelector(selectLoading);

  useEffect(() => {
    dispatch(requestСarId(id));
  }, [dispatch]);

  if (!oneCar) return;

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

  let addres;
  if (address) {
    addres = address.split(",");
  } else {
    return;
  }

  return spiner ? (
    <RingLoader
      className={s.loader}
      color={color}
      size={80}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  ) : (
    <div className={s.detailsPage}>
      <div className={s.detailsPageDivImg}>
        <img src={img} alt={brand} className={s.detailsPageImg} />
        <RentalForm />
      </div>
      <div>
        <ul className={s.detailsPageUlModel}>
          <li className={s.brendLi}>
            <h2 className={s.brendTitle}>
              {brand} {model}, {year}
            </h2>
            <p className={s.brendId}>id:{id.slice(0, 8)}</p>
          </li>
          <li className={s.addresLi}>
            <svg className={s.icon}>
              <use href={`${sprite}#icon-geopoint`} />
            </svg>
            <p className={s.addres}>
              {addres[1]}, {addres[2]}
            </p>
            <p className={s.addresMileage}>
              Mileage:{" "}
              {(mileage + "").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} km
            </p>
          </li>
          <li className={s.rentalPriceLi}>
            <p className={s.rentalPrice}>&#x24;{rentalPrice}</p>
          </li>
          <li className={s.descriptionLi}>
            <p className={s.description}>{description}</p>
          </li>
        </ul>
        <ul className={s.carCharacteristics}>
          <li>
            <h3 className={s.characteristicsHeadlines}>Rental Conditions: </h3>
            <ul className={s.machineDescription}>
              {rentalConditions.map((rental, index) => {
                return (
                  <li key={index} className={s.machineDescriptionLi}>
                    <svg className={s.icon}>
                      <use href={`${sprite}#icon-check-circle`} />
                    </svg>
                    <p className={s.machineDescriptionP}>{rental}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h3 className={s.characteristicsHeadlines}>Car Specifications: </h3>
            <ul className={s.machineDescription}>
              <li className={s.machineDescriptionLi}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-calendar`} />
                </svg>
                <p className={s.machineDescriptionP}>Year: {year}</p>
              </li>
              <li className={s.machineDescriptionLi}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-car`} />
                </svg>
                <p className={s.machineDescriptionP}>Type: {type}</p>
              </li>
              <li className={s.machineDescriptionLi}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-refueling`} />
                </svg>
                <p className={s.machineDescriptionP}>
                  Fuel Consumption: {fuelConsumption}
                </p>
              </li>
              <li className={s.machineDescriptionLi}>
                <svg className={s.icon}>
                  <use href={`${sprite}#icon-gear`} />
                </svg>
                <p className={s.machineDescriptionP}>
                  Engine Size: {engineSize}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={s.characteristicsHeadlines}>
              Accessories and functionalities:{" "}
            </h3>
            <ul className={s.machineDescription}>
              {accessories.map((accessor, index) => {
                return (
                  <li key={index} className={s.machineDescriptionLi}>
                    <svg className={s.icon}>
                      <use href={`${sprite}#icon-check-circle`} />
                    </svg>
                    <p className={s.machineDescriptionP}>{accessor}</p>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
