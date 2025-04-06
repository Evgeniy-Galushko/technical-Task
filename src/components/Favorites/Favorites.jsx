import { useState } from "react";
import sprite from "../../img/icon-sprite.svg";
import s from "./Favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritetСar } from "../../redux/cars/selectors.js";
import { requestFavoritetСarId } from "../../redux/cars/operations.js";

export default function Favorites({ id }) {
  const [favorites, setFavorites] = useState(false);
  const dispatch = useDispatch();
  const favoritesList = useSelector(selectFavoritetСar);

  const handlChange = (evt) => {
    setFavorites(evt.target.checked);
    dispatch(requestFavoritetСarId(id));
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
