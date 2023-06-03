import React, { useContext, useEffect } from "react";
//import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//import cart context
import { CartContext } from "../contexts/CartContext";
//import icons
import { BsBag } from "react-icons/bs";
//import logo
import Logo from "../img/logo.svg";
//import link
import { Link } from "react-router-dom";
//import useState
import { useState } from "react";
const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <div
      style={{
        backgroundColor: isActive ? "white" : "none",
        paddingTop: isActive ? '0.5rem' : '0.7rem',
        paddingBottom: isActive ? '0.5rem' : '0.7rem',
        boxShadow: isActive ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
        position: "fixed",
        width: "100%",
        zIndex: "20",
        transitionProperty: "all",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-6">
            <Link to={"/"}>
              <div>
                <img src={Logo} alt="logo" style={{ width: "40px" }} />
              </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-6">
            {/* cart */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              style={{
                cursor: "pointer",
                position: "relative",
                display: "flex",
                float: "right",
              }}
            >
              <BsBag className="icon-bag" style={{ fontSize: "1.5rem" }} />
              <div
                style={{
                  backgroundColor: "#EF4444",
                  position: "absolute",
                  left: "0.9rem",
                  top: "0.7rem",
                  fontSize: "12px",
                  width: "14px",
                  height: "14px",
                  color: "#fff",
                  borderRadius: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {itemAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
