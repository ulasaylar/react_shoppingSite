import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "../css/ProductDetails.css";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addCount = () => {
    setCount(count + 1);
  };

  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  return (
    <div className="flex-row detail-cont">
      <div className="left-detail-cont">
        <img src={image} alt="" />
      </div>
      <div className="right-detail-cont">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className="sub-detail-parent">
          <div className="sub-detail-cont">
            <CiCirclePlus onClick={addCount} className="sub-detail-icon" />
            <h3>{count}</h3>
            <CiCircleMinus onClick={removeCount} className="sub-detail-icon" />
          </div>
          <div>
            <button className="add-basket-button" onClick={addBasket}>
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
