import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
    const [burger, setBurger] = useState(false)
    const changeBurger = ()=>{
        if(burger){
            setBurger(false)
        }else{
            setBurger(true)
        }
    }
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <h1>
            <Link to="/">DerryDesigns</Link>
          </h1>
        </div>
        <div className={burger ? "nav-right": "nav-right  v-res"}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/product">PRODUCTS</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
        <div className="burger">
          <MenuIcon className="logo" onClick={changeBurger} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
