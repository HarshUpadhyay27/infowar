import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>DenyDesigns.</h1>
        <p>WHOLESALE LOGIN</p>
        <div>
          <div>
            <label htmlFor="emailInput">EMAIL</label>
            <input
              placeholder="you@your-company.com"
              type="email"
              id="emailInput"
            />
          </div>
          <div>
            <label htmlFor="passwordInput">PAASSWORD</label>
            <input
              placeholder="Enter Your Password"
              type="password"
              id="passwordInput"
            />
          </div>
          <p>FORGOT PASSWORD?</p>
          <button>LET'S GO!</button>
          <p className="not">Not a Wholesale Partner?</p>
          <ul>
            <li>
              <button>
                <Link to="/product">KEEP BROWSING</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/signup">APPLY HERE</Link>
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Login;
