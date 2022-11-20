import { Link, NavLink } from "react-router-dom";
import { translate } from "../i18n/translate";
import { LocalePicker } from "./LocalePicker";

const menuItems = [
  {
    link: "/",
    name: "menu.home"
  },
  {
    link: "/form",
    name: "menu.form"
  },
  {
    link: "/pricing",
    name: "menu.pricing"
  },
  {
    link: "/misc",
    name: "menu.miscelaneous"
  },
  {
    link: "/imperative-api",
    name: "menu.imperativeApi"
  }
];

export function Header() {
  function getNavLinkClassName({ isActive }) {
    const activeClass = isActive ? "active" : "";
    return `nav-link ${activeClass}`;
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {translate("siteName")}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {menuItems.map((item) => (
                <li key={item.link} className="nav-item">
                  <NavLink
                    className={getNavLinkClassName}
                    aria-current="page"
                    to={item.link}
                  >
                    {translate(item.name)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <LocalePicker />
          </div>
        </div>
      </nav>
    </header>
  );
}
