import React from "react";
import "../css/header.css";
import { FaShoppingBasket } from "react-icons/fa";

function Header() {
  return (
    <div className="flex-row" style={{ justifyContent: "space-between" }}>
      <div className="flex-row">
        <img className="logo" src="./src/images/ico.ico" alt="" />
        <p className="logo-text">Boho & Bag</p>
      </div>

      <div className="flex-row">
        <input className="searchbox" type="text" placeholder="Ara.." />
        <FaShoppingBasket className="basket-ico" />
      </div>
    </div>
  );
}

export default Header;
