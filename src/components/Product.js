import { Link } from "react-router-dom";
import React from "react";

const Product = ({ value }) => {
  console.log(value);
  return (
    <Link to={`/product/${value.id}`}>
      <div className="product">
        <div className="product-img">
          <img src={value.image} alt="..." />
        </div>
        <div className="product-details">
          <h1>{value.title}</h1>
          <p>Price : ${value.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
