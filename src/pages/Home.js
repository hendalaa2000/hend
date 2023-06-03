import React from "react";
import { useContext } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";
//import style home
import "../pages/css/Home.css";
//import components
import Product from "../components/Product";
import Hero from "../components/Hero";


const Home = () => {
  //get products from product context
  const product = useContext(ProductContext);
  //get only men`s and women`s clothing category
  const filteredProducts = product.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <>
    <Hero/>
      <section className="home" style={{paddingTop:'4rem'}}>
        <div className="container">
          <div className="row gy-3">
            {filteredProducts.map((product, index) => (
              <div className="col-lg-3" key={index}>
                  <Product  product={product}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
