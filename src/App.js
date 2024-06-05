import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ProductList from "./components/Product listing/ProductList";
import ProductAdd from "./components/Add Product/ProductAdd";
import OrderProduct from "./components/Order product/OrderProduct";
import RegisterCustomer from "./components/Register User/RegisterCustomer";

function App() {
  return (
    <div className="App">
      <h1>My Retail Shop</h1>

      <BrowserRouter>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Product
          </NavLink>
          <NavLink
            to="/order-product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Order Product
          </NavLink>
          <NavLink
            to="/register-customer"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Register Customer
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="add" element={<ProductAdd />} />
          <Route path="/order-product" element={<OrderProduct />} />
          <Route path="/register-customer" element={<RegisterCustomer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
