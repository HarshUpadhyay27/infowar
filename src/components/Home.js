import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from 'react-router-dom'

const Home = () => {
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };
  return (
    <div className="home">
      <div className="home-top">
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0068/2302/collections/Bed-bath.jpg?v=1573852909"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0068/2302/files/minerals-header-trend-page.jpg?v=1627941015"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0068/2302/collections/dalmatian_17.jpg?v=1561678687"
              alt="..."
            />
          </div>
        </Slider>
      </div>
      <div className="home-bottom">
      <div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="products">
            {item.slice(0, 12).map((item) => (
              <Product key={item.id} value={item} />
            ))}
          </div>
        )}
        </div>
        <button><Link to="/product" >SEE MORE</Link></button>
      </div>
    </div>
  );
};

export default Home;
