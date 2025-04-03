import { NavLink, useLocation } from "react-router-dom";
import s from "./CarCard.module.css";

export default function CarCard({
  id,
  img,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) {
  const location = useLocation();
  return (
    <div className={s.carCard}>
      <img src={img} alt={brand} className={s.cardImg} />
      <div className={s.brandPrice}>
        <h2 className={s.drend}>
          {brand} <span className={s.drendColor}>{model}</span>, {year}
        </h2>
        <p className={s.price}>&#x24;{rentalPrice}</p>
      </div>
      <div className={s.addresDiv}>
        <p className={s.addressLeft}>{address[0]}</p>
        <p className={s.address}>{address[1]}</p>
        <p className={s.address}>{rentalCompany}</p>
      </div>
      <div className={s.typeDiv}>
        <p className={s.addressLeft}>{type}</p>
        <p className={s.mileage}>{mileage} km</p>
      </div>
      <NavLink to={`/catalog/${id}`} className={s.link} state={location}>
        Read more
      </NavLink>
    </div>
  );
}
