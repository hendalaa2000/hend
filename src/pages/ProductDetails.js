import React, { useContext } from "react";
//import useParams
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  //get the product id from url
  const { id } = useParams();
  const products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  console.log(products);
  //if product not found
  if (!product) {
    return (
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading
      </section>
    );
  }
  //destructure product
  const { image, description, title, price } = product;
  return (
    <>
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "3rem",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={image} alt="" style={{ width: "250px" }} />
            </div>
            <div className="col-lg-6 m-auto">
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "500",
                  marginBottom: "0,5rem",
                  maxWidth: "450px",
                }}
              >
                {title}
              </h1>
              <div
                style={{
                  fontSize: "1.2rem",
                  color: "#EF4444",
                  fontWeight: "500",
                  marginBottom: "1.5rem",
                }}
              >
                ${price}
              </div>
              <p
                style={{
                  marginBottom: "2rem",
                }}
              >
                {description}
              </p>
              <button
                style={{
                  backgroundColor: "rgb(24 24 27)",
                  padding: "0.4rem 2rem",
                  color: "#fff",
                }}
                onClick={() => addToCart(product, product.id)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
