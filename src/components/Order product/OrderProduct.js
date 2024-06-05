// import React, { useState } from "react";
// import axios from "axios";

// const OrderProduct = ({ productId, qty }) => {
//   const [quantity, setQuantity] = useState(0);
//   const [customerId, setCustomerId] = useState("32828");

//   const handleQuantityChange = (e) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     // Ensure quantity is non-negative and within allowed range
//     setQuantity(Math.max(0, Math.min(newQuantity, qty)));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const order = {
//       customerId: productId,
//       productId: productId,
//       quantity: quantity,
//     };
//     setQuantity(0);
//     try {
//       const response = await axios.post(
//         "https://uiexercise.theproindia.com/api/Order/AddOrder",
//         order
//       );
//       console.log(response.data, "Order response");
//       setQuantity(0);
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };

//   return (
//     <div>
//       {/* <h2>Order {product.name}</h2> */}
//       <form onSubmit={handleSubmit}>
//         <label>Qty:</label>
//         <input
//           className="orderproductqty"
//           type="number"
//           value={quantity}
//           onChange={handleQuantityChange}
//         />
//         <button type="submit">Order now</button>
//       </form>
//     </div>
//   );
// };

// export default OrderProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const OrderProduct = () => {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get("https://uiexercise.theproindia.com/api/Product/GetAllProduct")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });

    axios
      .get("https://uiexercise.theproindia.com/api/Customer/GetAllCustomer")
      .then((response) => {
        setCustomers(response.data);
        console.log(customers, "cusssss");
      })
      .catch((error) => {
        console.error("There was an error fetching the customers!", error);
      });
  }, []);

  const handleOrder = () => {
    axios
      .post("https://uiexercise.theproindia.com/api/Order/AddOrder", {
        productId: selectedProductId,
        customerId: selectedCustomerId,
        quantity: parseInt(quantity),
      })
      .then((response) => {
        console.log("Order placed successfully!", response.data);
        toast.success("Order placed successfully!"); // Add toast notification
        // Clear selected values
        setSelectedProductId("");
        setSelectedCustomerId("");
        setQuantity(1);
      })
      .catch((error) => {
        console.error("There was an error placing the order!", error);
      });
  };

  return (
    <div className="container">
      <h2>Order Product</h2>
      <div className="order-form">
        <div className="form-group">
          <label>Product:</label>
          <select
            value={selectedProductId}
            onChange={(e) => setSelectedProductId(e.target.value)}
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.ProductId} value={product.ProductId}>
                {product.ProductName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Customer:</label>
          <select
            value={selectedCustomerId}
            onChange={(e) => setSelectedCustomerId(e.target.value)}
          >
            <option value="">Select a customer</option>
            {console.log(customers, "cushuf")}
            {customers.map((customer) => (
              <option key={customer.CustomerId} value={customer.CustomerId}>
                {customer.CustomerName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </div>
      </div>
      <button className="order-button" onClick={handleOrder}>
        Order
      </button>
      <ToastContainer />
    </div>
  );
};

export default OrderProduct;
