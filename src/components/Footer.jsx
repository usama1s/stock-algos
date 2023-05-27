import React from "react";
import insta from "../assets/images/insta.png";
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import linkedIn from "../assets/images/linkedIn.png";
import tiktok from "../assets/images/ticktok.png";
import mail from "../assets/images/mail.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-div">
        <p>Follow us on</p>
        <img src={insta} alt="insta-icon" />
        <img src={twitter} alt="twitter-icon" />
        <img src={facebook} alt="fb-icon" />
        <img src={linkedIn} alt="linkedIn-icon" />
        <img src={tiktok} alt="ticktok-icon" />
      </div>
      <div className="footer-div">
        <div className="footer-div">
          <img src={mail} alt="mail-icon" />
          <p>admin@stockalgos.com</p>
        </div>
        <p>Give Feedback</p>
        <p>Experts</p>
        <p>Help & Support</p>
        <p>Merch Store</p>
      </div>
      <div>
        <p>© 2023 StockAlgos | Proudly Canadian</p>
      </div>
    </section>
  );
};

export default Footer;
