import React, { useState } from "react";
import axios from "axios";

const RegisterCustomer = () => {
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailID, setEmailID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://uiexercise.theproindia.com/api/Customer/CreateCustomer", {
        customerName,
        mobile,
        emailID,
      })
      .then((response) => {
        console.log("Customer registered successfully!", response.data);
      })
      .catch((error) => {
        console.error("There was an error registering the customer!", error);
      });
  };

  return (
    <div className="container">
      <h2 className="register">Register Customer</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="addproducts">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={emailID}
              onChange={(e) => setEmailID(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
