import React from "react";
import BI from "../assets/images/logo5.png";
import II from "../assets/images/logo4.png";
import barron from "../assets/images/logo3.png";
import UN from "../assets/images/logo2.png";
import Kl from "../assets/images/logo1.png";

const FeaturedBrands = () => {
  return (
    <section class="container logos">
      <div>
        <p class="small-text">As featured in</p>
        <div class="logos-list">
          <div>
            <img src={BI} alt="" />
          </div>
          <div>
            <img src={II} alt="" />
          </div>
          <div>
            <img src={barron} alt="" />
          </div>
          <div>
            <img src={UN} alt="" />
          </div>
          <div>
            <img src={Kl} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
