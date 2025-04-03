import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const styles = {
    container: {
      marginTop: "50px", // Adds space below the navbar
    },
    heading: {
      fontWeight: "bold", // Makes the heading bold
    },
  };

  return (
    <div className="container" style={styles.container}>
      <h1 className="text-center" style={styles.heading}>
        All Products
      </h1>
      <div style={{ marginTop: "20px" }}></div> {/* Adds space between the heading and the product list */}
      <div className="row">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;