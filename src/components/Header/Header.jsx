import { NavLink } from "react-router-dom";
import sprite from "../../img/icon-sprite.svg";
export default function Header() {
  return (
    <div>
      <NavLink to="/">
        <svg width="104" height="16">
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </NavLink>

      {/* <a href="http://localhost:5173/">
        <svg width="104" height="16">
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </a> */}

      {/* <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink> */}
    </div>
  );
}
