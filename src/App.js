import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function App() {
  const carouselSettings = {
    showArrows: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 3000,
    transitionTime: 500,
    stopOnHover: false,
    dynamicHeight: false,
  };

  return (
    <div className="App">
      <Carousel className="Carousel" {...carouselSettings}>
        <div className="banner">
          <img
            src={require("./img/banner1.jpg")}
            alt="Banner 1"
            className="Carousel-img"
          />
        </div>
        <div className="banner">
          <img
            src={require("./img/banner2.jpg")}
            alt="Banner 2"
            className="Carousel-img"
          />
        </div>
        <div className="banner">
          <img
            src={require("./img/banner3.jpg")}
            alt="Banner 3"
            className="Carousel-img"
          />
        </div>
      </Carousel>

      <header className="App-header">
        <div className="TopBar">
          <p>Rua Tiradentes, 164 - Centro / Quarta a sábado - 19h - 01h</p>
        </div>

        <div className="Header-container Header-border">
          <a href="/" className="Logo-link">
            <img src={logo} className="Bar-logo" alt="logo do bar" />
          </a>

          <nav className="Navigation">
            <ul className="Navigation-list">
              <li className="Navigation-item">
                <a href="#drinks" className="Navigation-link">
                  DRINKS
                </a>
              </li>
              <li className="Navigation-item">
                <a href="#shots" className="Navigation-link">
                  SHOTS
                </a>
              </li>
              <li className="Navigation-item">
                <a href="#eventos" className="Navigation-link">
                  EVENTOS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
