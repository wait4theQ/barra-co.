import React from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Footer() {
    return (<footer className="Footer">
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Galeria</a>
                <a href="/menu">Cardápio</a>
                <a href="/events">Eventos</a>
            </div>
            <div className="instagram">
                <a
                    href="https://www.instagram.com/barra.co.fln/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={require("../img/instagram.png")} alt="Instagram"/>
                </a>
            </div>
            <div className="direitos">
                Todos os direitos reservados &copy;Barra Cô. 2024
            </div>
            <div className="border"></div>
            <div className="CreatedBy">
                Created By: <a href="/public" target="_blank">@GuiGo Solutions</a>
            </div>
        </footer>);
}

export default Footer;
