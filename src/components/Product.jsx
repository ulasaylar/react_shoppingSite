import React from "react";
import "../css/product.css";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  return (
    <div className="product-card">
      <img className="img" src={image} alt="" />
      <div className="sub-card">
        <p className="title-p">{title}</p>
        <p>{price} ₺</p>
      </div>
    </div>
  );
}

export default Product;
