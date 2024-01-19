import React from "react";
import "../App.css";
import logo from "../img/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import AddressBar from "./addressBar";

function Navbar() {
  return (
    <header className="App-header">
      <AddressBar />
      <div className="Header-container Header-border">
        <a href="/" className="Logo-link">
          <img src={logo} className="Bar-logo" alt="logo do bar" />
        </a>

        <nav className="Navigation">
          <ul className="Navigation-list">
            <li className="Navigation-item">
              <Link to="menu" className="Navigation-link">
                MENU
              </Link>
            </li>

            <li className="Navigation-item">
              <Link to="events" className="Navigation-link">
                EVENTOS
              </Link>
            </li>
            <li className="Navigation-item">
              <Link to="contact" className="Navigation-link">
                CONTATO
              </Link>
            </li>
            
              <li className="Navigation-item">
                <Link to="#galeria" className="Navigation-link">
                  GALERIA
                </Link>
              </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
