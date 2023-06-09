import React from "react";
import BI from "../assets/images/bussiness-insider.png";
import II from "../assets/images/institutional-investor.png";
import barron from "../assets/images/barron.png";
import UN from "../assets/images/us-news.png";
import Kl from "../assets/images/kiplinger.png";

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
