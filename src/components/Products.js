import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    setItem(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="products">
          {item.map((item) => (
            <Product key={item.id} value={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
