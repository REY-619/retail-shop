import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "https://uiexercise.theproindia.com/api/Product/GetAllProduct"
      );
      console.log(response, "checkk items");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      <h2>Products</h2>
      <table>
        <thead className="thead">
          <tr>
            <th className="productName">Product Name</th>
            <th>Available qty</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {currentProducts.map((product) => (
            <tr key={product.ProductId}>
              <td>{product.ProductName}</td>
              <td>{product.Quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastProduct >= products.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
