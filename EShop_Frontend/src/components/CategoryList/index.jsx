import React, { useState, useEffect } from "react";
import ApiClient from "../../client/ApiClient";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    ApiClient.get("/categories")      
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      className="container"
      style={{
        marginTop: '40px', // Add space between the header button and the "All Categories" text
      }}
    >
      <h2
        className="text-center"
        style={{
          marginBottom: '20px', // Add space between "All Categories" and the image cards
        }}
      >
        <bold>All Categories</bold>
      </h2>
      <div
        className="row"
        style={{
          gap: '20px', // Add space between the image cards
        }}
      >
        {categories.map((category, index) => (
          <Category data={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;