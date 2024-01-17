import logo from "../img/logo.png";
import React from "react";

function Menu() {

    return (
        <div className="App">

            <header className="App-header">
                <div className="TopBar">
                    <p>Rua Tiradentes, 164 - Centro / Quarta a sábado - 19h - 01h</p>
                </div>

                <div className="Header-container Header-border">
                    <a href="/public" className="Logo-link">
                        <img src={logo} className="Bar-logo" alt="logo do bar" />
                    </a>


                </div>
            </header>

            <section className="description-section">


            </section>

            <section className="gallery" id="portafolio">

            </section>
            <footer className="Footer">
                <div className="links">
                    <a href="/public">Home</a>
                    <a href="/public">Galeria</a>
                    <a href="/public">Menu</a>
                    <a href="/public">Eventos</a>
                </div>
                <div className="instagram">
                    <a
                        href="https://www.instagram.com/barra.co.fln/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={require("../img/instagram.png")} alt="Instagram" />
                    </a>
                </div>
                <div className="direitos">
                    Todos os direitos reservados &copy;Barra Cô. 2024
                </div>
                <div className="border"></div>
                <div className="CreatedBy">
                    Created By: <a href="/public" target="_blank">@GuiGo Solutions</a>
                </div>
            </footer>
        </div>
    );
}

export default Menu;