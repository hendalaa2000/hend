import React from "react";
import { useContext } from "react";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
//import cart context
import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  const {addToCart}=useContext(CartContext)
  const { id, image, category, title, price } = product;
  return (
    <>
      <>
        <div className="card mb-4">
          <div className="image-container">
            <img src={image} alt="img" />
          </div>
          <div className="button-container ">
            <button onClick={()=> addToCart(product,id)}>
              <BsPlus />
            </button>
            <Link to={`/product/${id}`}>
              <BsEyeFill />
            </Link>
          </div>
        </div>
        {/* category title and price */}
        <div className="category mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="title-card">{title}</h2>
        </Link>
        <div className="fw-semibold text-dark">${price}</div>
      </>
    </>
  );
};

export default Product;
