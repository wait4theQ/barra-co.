import React, { useState } from "react";
import { alcoholFree, drinks, others, shots } from "./data";
import "./menu.css";
import Footer from "../components/footer.js";
import NavbarMenu from "../components/navbarMenu";

const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState(drinks);
  const [activeButton, setActiveButton] = useState();
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [showAllItems, setShowAllItems] = useState(false);

  const showMenu = (menu, buttonName) => {
    setCurrentMenu(menu);
    setActiveButton(buttonName);
    setMenuVisibility(true);
    setShowAllItems(false);
  };

  const renderMenuItems = () => {
    if (showAllItems) {
      return [...drinks, ...shots, ...alcoholFree, ...others];
    } else {
      return currentMenu;
    }
  };

  return (<div>
        <NavbarMenu></NavbarMenu>
        <h1>Cardápio</h1>
        <div className="menuContainer">
          <div className="menuButtonContainer">
            <button
                className={`menuButton ${showAllItems ? "activeButton" : ""}`}
                onClick={() => showMenu([...drinks, ...shots, ...alcoholFree, ...others], "todos")}
            >
              <h4>Todos</h4>
              <img
                  src={require("../img/all.png")}
                  alt=""
                  className="img-botao"
              />
            </button>
            <button
                className={`menuButton ${activeButton === "drinks" ? "activeButton" : ""}`}
                onClick={() => showMenu(drinks, "drinks")}
            >
              <h4>Drinks</h4>
              <img
                  src={require("../img/drinks.png")}
                  alt=""
                  className="img-botao"
              />
            </button>
            <button
                className={`menuButton ${activeButton === "shots" ? "activeButton" : ""}`}
                onClick={() => showMenu(shots, "shots")}
            >
              <h4>Shots</h4>
              <img
                  src={require("../img/shots.png")}
                  alt=""
                  className="img-botao"
              />
            </button>
            <button
                className={`menuButton ${activeButton === "alcoholFree" ? "activeButton" : ""}`}
                onClick={() => showMenu(alcoholFree, "alcoholFree")}
            >
              <h4>Sem Álcool</h4>
              <img
                  src={require("../img/alcoholfree.png")}
                  alt=""
                  className="img-botao"
              />
            </button>
            <button
                className={`menuButton ${activeButton === "others" ? "activeButton" : ""}`}
                onClick={() => showMenu(others, "others")}
            >
              <h4>Outros</h4>
              <img
                  src={require("../img/others.png")}
                  alt=""
                  className="img-botao"
              />
            </button>
          </div>
          {isMenuVisible && (<div className="menuContainer">
                {renderMenuItems().map((item) => (<div
                        key={item.id}
                        className="menuItem"
                        style={{backgroundColor: item.color}}
                    >
                      {item.image && <img src={item.image} alt={item.name}/>}
                      <h3>{item.name} </h3>
                      {item.size && <p className="size"> ({item.size})</p>}
                      <p>{item.ingredients}</p>
                      <p className="price">{item.price}</p>
                    </div>))}
              </div>)}
        </div>
        <Footer></Footer>
      </div>);
};

export default Menu;
