import React from "react";
import Navbar from "./navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import App from "./";
import Menu from "./pages/menu";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
    );
}

export default App;
