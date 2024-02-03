import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './menu.css';
import Footer from '../components/footer.js';
import NavbarMenu from '../components/navbarContato.js';
import './contato.css';

const Contato = () => {
    const [mapInitialized, setMapInitialized] = useState(false);

    useEffect(() => {
        const latitude = -27.59899255577128;
        const longitude = -48.548862773011;

        if (!mapInitialized) {
            const map = L.map('map').setView([latitude, longitude], 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            

            const customIcon = L.icon({
                iconUrl: require('./itens/custom-marker.png'),
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
            });

            L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

            setMapInitialized(true);
        }
    }, [mapInitialized]);

    return (
        <div>
            <NavbarMenu></NavbarMenu>

            <div className="contato-container">
                <img
                    src={require("../img/bar.jpg")}
                    alt="foto contato"
                    className="foto-contato"
                />

                <div className="info-contato">
                    <h1>Entre em Contato</h1>
                    <p>Números para Contato:</p>
                    <p>📞 Telefone: (48) 1234-5678</p>
                    <p>✉️ E-mail: contato@bar.com</p>
                    <p>📷 Instagram: @barra.co.fln</p>
                </div>

                <div id="map" className="map-container" />
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contato;
