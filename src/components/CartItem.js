import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useContext } from "react";
//import cart context
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const {removeFromCart,incraseAmount,decraseAmount} =useContext(CartContext)
  const { id, image, title, price, amount } = item;
  return (
    <div
      style={{
        paddingTop: "0.5rem",
        paddingBottom: "0,5rem",
        borderBottom: "1px solid #E5E7EB",
        width: "100%",
        fontWeight: "300",
        color: "#6B7280",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <div
        style={{
          minHeight: "150px",
          display: "flex",
          alignItems: "center",
          columnGap: "1rem",
          width: "full",
        }}
      >
        {/* image */}
        <Link to={`product/${id}`}>
          <img src={image} style={{ maxWidth: "70px" }} alt="img"/>
        </Link>
        <div
          style={{ display: "flex", width: "100%", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems:"center",
              marginBottom:"0.5rem"
            }}
          >
            {/* title & remove icon */}
            {/* title */}
            <Link
              to={`product/${id}`}
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                fontWeight: "500",
                maxWidth: "240px",
                textDecoration: "none",
                color: "#000",
              }}
            >
              {title}
            </Link>
            {/* remove icon */}
            <div style={{ fontSize: "1.2rem", cursor: "pointer" }} onClick={()=>removeFromCart(id)}>
              <IoMdClose style={{ color: "#6B7280" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              columnGap: "0.5rem",
              height: "36px",
              alignItems:"center"
            }}
          >
            {/* qty */}
            <div
              style={{
                display: "flex",
                flex: "1",
                maxWidth: "100px",
                alignItems: "center",
                height: "29px",
                fontWeight: "500",
                color: "#000",
                border: "1px solid #000",
              }}
            >
              {/* minus icon */}
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={()=>decraseAmount(id)}
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                }}
              >
                {amount}
              </div>
              {/* pluse icon */}
              <div
                style={{
                  height: "100%",
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={()=>incraseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div
              style={{
                display: "flex",
                flex: "1",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              ${price}
            </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div
              style={{
                display: "flex",
                flex: "1",
                justifyContent: "end",
                alignItems: "center",
                fontWeight: "500",
                color: "#000",
              }}
            >{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
