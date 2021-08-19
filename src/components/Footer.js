import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li className="company" >
          <h1>COMPANY</h1>
          <p>Shipping</p>
          <p>Return Popliy</p>
          <p>Work With Us</p>
          <p>Terms & Conditions</p>
        </li>
        <li>
          <h1>FOLLOW US OUT THERE</h1>
          <p>
            <span>
              <FacebookIcon/>
            </span>
            Facebook
          </p>
          <p>
            <span>
              <TwitterIcon/>
            </span>
            TWitter
          </p>
          <p>
            <span>
              <PinterestIcon/>
            </span>
            Pinterest
          </p>
          <p>
            <span>
              <InstagramIcon/>
            </span>
            Instagram
          </p>
        </li>
        <li className="company">
          <h1>THANK YOU</h1>
          <p>
            Thank you to the wonderful folks over at Herbivoure for letting us
            use their beautiful imagery in this demo. Head over to their store
            to store to shop their full catalog of amazing products
          </p>
        </li>
        <li>
          <h1>NEWSLETTERS</h1>
          <div>
            <input id="inputId" type="text" placeholder="your@email.com" />
            <label htmlFor="inputId">SUBSCRIBE</label>
          </div>
        </li>
      </ul>
      <div>
          <div>
              <p>Copyright &copy; 2022 Grid Bright</p>
              <p>Powerd by Shopify.</p>
          </div>
          <div className="cad" >CAD $ <ExpandMoreIcon/></div>
      </div>
    </div>
  );
};

export default Footer;
