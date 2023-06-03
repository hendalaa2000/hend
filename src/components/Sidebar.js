import React, { useContext } from "react";
//import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//import cart context
//import sidebar style
import "./css/sidebar/sidebar.css";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isOpen, handelClose } = useContext(SidebarContext);
  const { cart, clearCart, total,itemAmount } = useContext(CartContext);
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "close"}`}>
        <div className="s-top">
          <div className="s-title">Shopping Bag({itemAmount})</div>
          {/* icon */}
          <div className="s-icon" onClick={handelClose}>
            <IoMdArrowForward />
          </div>
        </div>
        <div
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            borderBottomWidth: "1px",
            height: "440px",
          }}
        >
          {cart.map((item, id) => {
            return <CartItem item={item} key={id} />;
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* total */}
            <div style={{ textTransform: "uppercase", fontWeight: "600" }}>
              <span style={{ marginRight: "0.5rem" }}>Total :</span>$
              {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart icon */}
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "2rem",
                height: "2rem",
                color: "#ffffff",
                backgroundColor: "#EF4444",
                fontSize: "1rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
              onClick={clearCart}
            >
              <FiTrash2 />
            </div>
          </div>
          <Link
            to={`/`}
            style={{
              backgroundColor: "#E5E7EB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.7rem",
              fontWeight: "500",
              color: "#000",
              textDecoration: "none",
              marginBottom:"0.5rem",
              marginTop:"0.5rem"
            }}
          >
            View Cart
          </Link>
          <Link to={`/`}           
            style={{
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.7rem",
              fontWeight: "500",
              color: "#fff",
              textDecoration: "none",
            }}>CheckOut</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
