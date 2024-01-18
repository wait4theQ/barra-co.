import ReactDOM from "react-dom/client";

import React from "react";
import {
    Routes,
    Route, BrowserRouter, Router,
} from "react-router-dom";
import App from "./App.js";
import Menu from "./pages/menu.js";


export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/menu" element={<Menu/>}/>
            </Routes>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);