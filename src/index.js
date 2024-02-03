import ReactDOM from "react-dom/client";

import React from "react";
import {
    Routes,
    Route, BrowserRouter, Router,
} from "react-router-dom";
import App from "./App.js";
import Menu from "./pages/menu.js";
import Events from "./pages/events.js";


export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/events" element={<Events/>}/>
            </Routes>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);