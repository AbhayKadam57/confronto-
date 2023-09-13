import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Compare from "./components/Compare";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const { products } = useSelector((state) => state.compare, shallowEqual);

  return (
    <div className="App">
      <div className="title">
        <h2>Confronto</h2>
      </div>
      <div className="horizontal_line"></div>
      <Router>
        <div className="header">
          <Link
            to="/"
            style={{
              color: "#000",
              textDecoration: "none",
            }}
          >
            <p>Catalog</p>
          </Link>
          <Link
            to="/compare"
            style={{
              color: "#000",
              textDecoration: "none",
              fontWeight: products?.length > 0 ? `800` : `300`,
            }}
          >
            <p>Compare({products?.length > 0 ? products?.length : 0})</p>
          </Link>
        </div>
        <div className="horizontal_line_1"></div>

        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
