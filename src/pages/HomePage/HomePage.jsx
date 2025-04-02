import { NavLink } from "react-router-dom";
import s from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={s.homePage}>
      <div className={s.greetings}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.paragraph}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <NavLink to="/catalog" className={s.link}>
          View Catalog
        </NavLink>
      </div>
    </div>
  );
}
