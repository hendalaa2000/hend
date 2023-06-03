import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./media/media.css";
import { BrowserRouter as Router } from "react-router-dom";
//import ProductProvider
import ProductProvider from "./contexts/ProductContext";
//import SidebarProvider
import SidebarProvider from "./contexts/SidebarContext";
//import CartProvider
import CartProvider from "./contexts/CartContext";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
