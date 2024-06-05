import React, { useState } from "react";
import axios from "axios";

const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive); // Toggle isActive state on checkbox change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { productName, quantity, isActive };
    await axios.post(
      "https://uiexercise.theproindia.com/api/Product/AddProduct",
      product
    );
    setProductName("");
    setQuantity(0);
    setIsActive(false);
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="form-container-one">
        <div className="addproducts">
          <div className="form-group">
            <label>Name:</label>
            <input
              className="addproductname"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input
              className="addproductqty"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Active:</label>
            <input
              type="checkbox"
              checked={isActive} // Controlled checkbox with current isActive state
              onChange={handleToggle} // Handle checkbox change
            />
          </div>
        </div>
        <button className="order-button" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
