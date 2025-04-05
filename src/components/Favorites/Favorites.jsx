import { useState } from "react";
import sprite from "../../img/icon-sprite.svg";
import s from "./Favorites.module.css";

export default function Favorites({ id }) {
  const [favorites, setFavorites] = useState(false);
  const [carId, setCarId] = useState("");

  const favoritesCar = { carId };

  console.log(favoritesCar);

  const handlChange = (evt) => {
    setFavorites(evt.target.checked);

    if (evt.target.checked) {
      setCarId(id);
    }
  };
  return (
    <div className={s.favorites}>
      <input
        className={s.input}
        id={id}
        type="checkbox"
        onChange={handlChange}
        checked={favorites}
      />
      <label htmlFor={id}>
        {favorites ? (
          <svg className={s.iconHeart}>
            <use href={`${sprite}#icon-blue-heart`} />
          </svg>
        ) : (
          <svg className={s.iconHeart}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        )}
      </label>
    </div>
  );
}
