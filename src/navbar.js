import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Navbar() {
    return (
        <header className="App-header">
            <div className="TopBar">
                <p>Rua Tiradentes, 164 - Centro / Quarta a sábado - 19h - 01h</p>
            </div>

            <div className="Header-container Header-border">
                <a href="/" className="Logo-link">
                    <img src={logo} className="Bar-logo" alt="logo do bar"/>
                </a>

                <nav className="Navigation">
                    <ul className="Navigation-list">
                        <li className="Navigation-item">
                            <Link to="#drinks" className="Navigation-link">
                                HOME
                            </Link>
                        </li>
                        <li className="Navigation-item">
                            <Link to="#shots" className="Navigation-link">
                                MENU
                            </Link>
                        </li>
                        <li className="Navigation-item">
                            <Link to="menu" className="Navigation-link">
                                EVENTOS
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
