import React from "react";
import "../css/header.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <FaShoppingBasket
          className="basket-ico"
          onClick={() => dispatch(setDrawer())}
        />
      </div>
    </div>
  );
}

export default Header;
