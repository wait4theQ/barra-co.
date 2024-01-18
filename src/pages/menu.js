import React from "react";
import Footer from "../components/footer";
import "../App.css";
import {drinks, shots, alcoholFree, others} from "./data";
import AddressBar from "../components/addressBar";

function Menu() {

//  LISTAGEM INFOS DOS DRINKS
    const listDrinks = drinks.map(drink =>
        <li key={drinks.id} className="drink-list">
            <div className="drink-container">
                <b>{drink.name}</b> {drink.size} {drink.price}
                <br/>
                {drink.ingredients}
            </div>
        </li>
    );

//  LISTAGEM INFOS DOS SHOTS
    const listShots = shots.map(shot =>
            <li key={shots.id} className="drink-list">
                <div className="shot-container">
                    <b>{shot.name}</b> {shot.price}
                    <br/>
                    {shot.ingredients}
                </div>
            </li>
    );

//  LISTAGEM INFOS DAS BEBIDAS SEM ALCOOL
    const listAlcoholFree = alcoholFree.map(alcoholFree =>
        <li key={alcoholFree.id} className="drink-list">
            <div className="shot-container">
                <b>{alcoholFree.name}</b> {alcoholFree.size} {alcoholFree.price}
                <br/>
                {alcoholFree.ingredients}
            </div>
        </li>
    );

//  LISTAGEM INFOS DE OUTROS
    const listOthers = others.map(other =>
        <li key={others.id} className="drink-list">
            <div className="shot-container">
                <b>{other.name}</b> {other.price}
                <br/>
            </div>
        </li>
    );

    return (<div className="App">
        <AddressBar></AddressBar>
        <section className="menu-section">
            <div className="menu-drinks">
                <h2>DRINKS</h2>
                {listDrinks}
            </div>
            <div className="menu-shots">
                <h2>SHOTS</h2>
                {listShots}
            </div>
            <div className="menu-shots">
                <h2>SEM ALCOOL</h2>
                {listAlcoholFree}
            </div>
            <div className="menu-shots">
                <h2>OUTROS</h2>
                {listOthers}
            </div>
        </section>

        <Footer></Footer>
    </div>);

}

export default Menu;