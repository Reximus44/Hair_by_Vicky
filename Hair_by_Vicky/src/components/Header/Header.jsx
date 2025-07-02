import "./Header.css";
import { useContext } from "react";

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Hair by Vicky</h1>
            <nav className="header__nav">
                <a href="#services" className="header__link">Services</a>
                <a href="#about" className="header__link">About</a>
                <a href="#contact" className="header__link">Contact</a>
            </nav>
        </header>
    );
}

export default Header; 