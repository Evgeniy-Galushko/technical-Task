import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={s.homePage}>
      <ul className={s.greetings}>
        <li>
          <h1 className={s.title}>Find your perfect rental car</h1>
        </li>
        <li>
          <p className={s.paragraph}>
            Reliable and budget-friendly rentals for any journey
          </p>
        </li>
        <li>
          <NavLink to="/catalog" className={s.link}>
            View Catalog
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
