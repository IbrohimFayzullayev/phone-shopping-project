import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Products from "./components/Products";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="main">
          <Menu />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/product" element={<Product />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
