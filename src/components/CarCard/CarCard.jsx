import { NavLink, useLocation } from "react-router-dom";

import s from "./CarCard.module.css";
import Favorites from "../Favorites/Favorites.jsx";

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
    <>
      <img src={img} alt={brand} className={s.cardImg} />
      <Favorites id={id} />
      <ul>
        <li className={s.brandPrice}>
          <h2 className={s.drend}>
            {brand} <span className={s.drendColor}>{model}</span>, {year}
          </h2>
          <p className={s.price}>&#x24;{rentalPrice}</p>
        </li>
        <li className={s.addresLi}>
          <p className={s.addressLeft}>{address[0]}</p>
          <p className={s.address}>{address[1]}</p>
          <p className={s.address}>{rentalCompany}</p>
        </li>
        <li className={s.typeLi}>
          <p className={s.addressLeft}>{type}</p>
          <p className={s.mileage}>{mileage} km</p>
        </li>
      </ul>
      <NavLink to={`/catalog/${id}`} className={s.link} state={location}>
        Read more
      </NavLink>
    </>
  );
}
