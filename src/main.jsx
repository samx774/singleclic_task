import React from "react";
import ReactDOM from "react-dom/client";
import { PhotoProvider } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { BrowserRouter } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/effect-fade';
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import "./i18n";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <PhotoProvider>
        <App />
      </PhotoProvider>
    </CartProvider>
  </BrowserRouter>
);
