import React from "react";

const Signup = () => {
  return (
    <div className="signup">
      <form onSubmit={(e)=>{e.preventDefault()}} >
        <h1>SIGN-UP</h1>
        <p><span>*</span> indicates a required field</p>
        <div className="div-top">
          <div>
            <label htmlFor="firstInput">
              FIRST NAME<span>*</span>
            </label>
            <input type="text" id="firstInput" />
          </div>
          <div>
            <label htmlFor="lastInput">
              LAST NAME<span>*</span>
            </label>
            <input type="text" id="lastInput" />
          </div>
          <div>
            <label htmlFor="phoneInput">
              PHONE<span>*</span>
            </label>
            <input type="text" id="phoneInput" />
          </div>
          <div>
            <label htmlFor="mobileInput">MOBILE PHONE</label>
            <input type="text" id="mobileInput" />
          </div>
          <div>
            <label htmlFor="emailInput">
              EMAIL<span>*</span>
            </label>
            <input type="email" id="emailInput" />
          </div>
        </div>
        <div className="div-bottom">
          <div>
            <label htmlFor="nameInput">
              COMPANY NAME<span>*</span>
            </label>
            <input type="text" id="nameInput" />
          </div>
          <div>
            <label htmlFor="webInput">
            COMPANY WEBSITE<span>*</span>
            </label>
            <input type="text" id="webInput" />
          </div>
          <div>
            <label htmlFor="addInput">
            COMPANY ADDRESS<span>*</span>
            </label>
            <input type="text" id="addInput" />
          </div>
          <div>
            <label htmlFor="add2Input">
              ADDRESS 2
            </label>
            <input type="text" id="add2Input" />
          </div>
          <div>
            <label htmlFor="cityInput">
              CITY<span>*</span>
            </label>
            <input type="text" id="cityInput" />
          </div>
          <div>
            <label htmlFor="statelInput">
              STATE<span>*</span>
            </label>
            <input type="text" id="statelInput" />
          </div>
        </div>
        <button>REGISTER HERE</button>
      </form>
    </div>
  );
};

export default Signup;
