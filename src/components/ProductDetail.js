import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const Id = match.params.id;
  const [item, setItem] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${Id}`);
    setItem(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [Id]);
  return (
    <div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="product-detail">
          <div>
            <img src={item.image} alt="" />
          </div>
          <div className="detail">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>Price : ${item.price}</p>
            <button>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
