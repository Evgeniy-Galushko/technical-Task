import { NavLink } from "react-router-dom";
import sprite from "../../img/icon-sprite.svg";
import s from "./Header.module.css";
import Navigation from "../Navigation/Navigation.jsx";

export default function Header() {
  return (
    <section className={s.header}>
      <NavLink to="/" className={s.logo}>
        <svg className={s.logoSvg}>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </NavLink>

      <Navigation />
    </section>
  );
}
