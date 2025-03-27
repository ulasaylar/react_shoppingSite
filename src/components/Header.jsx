import React from "react";
import "../css/header.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex-row" style={{ justifyContent: "space-between" }}>
      <div className="flex-row">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src="./src/images/ico.ico"
          alt=""
        />
        <p onClick={() => navigate("/")} className="logo-text">
          Boho & Bag
        </p>
      </div>

      <div className="flex-row">
        <input className="searchbox" type="text" placeholder="Ara.." />
        <FaShoppingBasket className="basket-ico" />
      </div>
    </div>
  );
}

export default Header;
