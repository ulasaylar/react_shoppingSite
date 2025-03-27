import React from "react";
import "../css/product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();
  return (
    <div className="product-card">
      <img className="img" src={image} alt="" />

      <div className="sub-card">
        <div className="title-p-cont">
          <p className="title-p">{title}</p>
        </div>
        <p>{price} ₺</p>
      </div>

      <div className="detail-button">
        <button onClick={() => navigate("/product-details/" + id)}>
          Detayına Git
        </button>
      </div>
    </div>
  );
}

export default Product;
