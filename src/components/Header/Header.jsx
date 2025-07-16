import "./Header.css"
import headerLogo from "../../vendor/images/header_logo.png";
import { useContext } from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Hair by Vicky</h1>
        <img src={headerLogo} alt="butterfly logo" className="header__logo" />
        <ul className="nav__links">
          <li>
            <a href="#services" className="nav__link">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="#contacts" className="nav__link">
              Contacts
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
