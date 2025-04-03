import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styles from './styles.module.css';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const getProduct = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <img src={product.images} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">
              <span className="badge badge-secondary">{product.category?.name}</span>
            </p>
            <p style={{ fontSize: "1.3rem", marginBottom: "20px" }}>{product.description}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2 style={{ margin: 0 }}>
                <span>&#8377;</span> {product.price}
              </h2>
              <a href="/" className="btn btn-primary" style={{
                  marginLeft: "auto",
                  padding: "12px 24px", // Increased padding for a larger button
                  fontSize: "1.2rem", // Increased font size
                }}>
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;