import React from "react";
//import img
import WomenImg from "../img/woman_hero.png";
import WomenBg from "../img/bg_hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "#FBCFE8",
          background: `url(${WomenBg})`,
          height: "800px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "6rem",
          paddingBottom: "6rema",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div className="hero-content">
                {/* text */}
                <div
                  style={{
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2px",
                      backgroundColor: "#EF4444",
                      marginRight: "0.75rem",
                    }}
                  ></div>
                  New Trend
                </div>
                <h1
                  style={{
                    fontSize: "60px",
                    fontWeight: "300",
                    marginBottom: "1rem",
                  }}
                >
                  AUTUMN SALE STYLISH
                  <br />
                  <span style={{ fontWeight: "600" }}>WOMENS</span>
                </h1>
                <Link
                  to={"/"}
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    borderBottom:"2px solid #000",
                    color: "#000",
                    textDecoration:"none"
                  }}
                >
                  Discover More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {/* img */}
              <div style={{ display: "none" }} className="hero-img">
                <img src={WomenImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
