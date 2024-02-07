import React, {useEffect, useState} from 'react';
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

						L.marker([latitude, longitude], {icon: customIcon}).addTo(map);

						setMapInitialized(true);
				}
		}, [mapInitialized]);

		return (<div>
				<NavbarMenu></NavbarMenu>
				<div id="map" className="map-container"/>
				<div className="contato-container">
						<div className="addressInfo">
								<div className="info-contato">
										<h1>Entre em Contato</h1>
										{/*<p>Números para Contato:</p>*/}
										<p>📞 <b>Telefone:</b> (48) 1234-5678</p>
										<p>✉️ <b>E-mail:</b> contato@bar.com</p>
										<p>📷 <b>Instagram:</b> @barra.co.fln</p>
								</div>
								<img
										src={require("../img/banner9.jpg")}
										alt="foto contato"
										className="foto-contato"
								/>
						</div>
				</div>

				<Footer></Footer>
		</div>);
};

export default Contato;
