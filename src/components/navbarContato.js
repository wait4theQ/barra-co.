import React from "react";
import "../App.css";
import logo from "../img/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import AddressBar from "./addressBar";

function NavbarMenu() {
		return (
				<header className="App-header">
						<AddressBar />
						<div className="header-container header-border navbar-menu">
								<a href="/" className="Logo-link">
										<img src={logo} className="Bar-logo logo-menu" alt="logo do bar" />
								</a>

								<nav className="Navigation nav-pages-menu">
										<ul className="Navigation-list">
												<li className="Navigation-item">
														<Link to="/" className="Navigation-link">
																HOME
														</Link>
												</li>

												<li className="Navigation-item">
														<Link to="/menu" className="Navigation-link">
																CARDÁPIO
														</Link>
												</li>
												<li className="Navigation-item">
														<Link to="/events" className="Navigation-link">
																EVENTOS
														</Link>
												</li>

					
										</ul>
								</nav>
						</div>
				</header>
		);
}

export default NavbarMenu;
