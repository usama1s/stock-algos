import React from "react";
import insta from "../assets/images/insta.png";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import linkedIn from "../assets/images/linkedIn.png";
import tiktok from "../assets/images/ticktok.png";
import mail from "../assets/images/mail.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <p>Follow us on</p>
        <a>
          <img src={insta} alt="insta-icon" />
        </a>
        <a>
          <img src={twitter} alt="twitter-icon" />
        </a>
        <a>
          <img src={facebook} alt="fb-icon" />
        </a>
        <a>
          <img src={linkedIn} alt="linkedIn-icon" />
        </a>
        <a>
          <img src={tiktok} alt="ticktok-icon" />
        </a>
      </div>
      <div className="footer-div footer-div2">
        <div className="footer-div">
          <img src={mail} alt="mail-icon" />
          <a href="mailto:admin@stockalgos.com">admin@stockalgos.com</a>
        </div>
        <div className="pages">
        <a>Give Feedback</a>
        <a>Experts</a>
        <a>Help & Support</a>
        <a>Merch Store</a>
        </div>
      </div>
      <div>
        <p>© 2023 StockAlgos | Proudly Canadian</p>
      </div>
    </footer>
  );
};

export default Footer;
