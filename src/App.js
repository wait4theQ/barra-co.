import React from "react";
import "./App.css";
//import logo from "./img/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
      <Navbar className="navbar"></Navbar>
      <Carousel className="Carousel" {...carouselSettings}>
        <div className="banner">
          <img
            src={require("./img/a.jpg")}
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

        <div className="banner">
          <img
            src={require("./img/b.jpg")}
            alt="Banner 3"
            className="Carousel-img"
          />
        </div>
      </Carousel>
      <section className="description-section">
        <div className="Biography">
          <h2>Barra Cô.</h2>
          <p>
            "Adentre o universo encantador do Barra Cô, onde cada gole é uma
            jornada única e cada instante é marcado por um sabor inigualável.
            Localizado no coração da cidade, somos a celebração da arte da coquetelaria. 
            A decoração contemporânea e a iluminação suave criam o cenário perfeito para
            noites memoráveis. Bebidas de qualidade, sabor incomparável! Nossa seleção de bebidas é minuciosamente escolhida para
            oferecer aos nossos clientes uma experiência única. Desde clássicos
            reinventados até criações exclusivas, nossos drinks são verdadeiras
            obras de arte líquidas. Shot a Shot, uma viagem de sabores, cada shot
            possui uma experiência única!! Cada gole revela camadas de sabores que
            cativam os sentidos, transformando cada visita em uma jornada
            inesquecível."
          </p>
        </div>

        <div className="Image-container">
          <img
            src={require("./img/sobre.jpg")}
            alt="Descrição do Bar"
            className="Description-image"
          />
        </div>
      </section>

      <section className="gallery" id="galeria">
        <div className="contenedor">
          <h2 className="subtitulo">Galeria</h2>
          <div className="contenedor-galeria">
            <img
              src={require("./img/6.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/2.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/3.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/4.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/5.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/7.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/9.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/10.jpg")}
              alt=""
              className="img-galeria"
            />
            <img
              src={require("./img/11.jpg")}
              alt=""
              className="img-galeria"
            />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
