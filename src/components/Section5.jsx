import React from "react";
import testCard from "../assets/images/testCard.png";

const Section5 = () => {
  return (
    <section class="star-p">
      <div class="top-h">
        <span>🌟</span>
        <h1>Star Features</h1>
      </div>
      <div class="line"></div>
      <div class="coller-2">
        <div class="txt">
          <h2>Signals</h2>
          <p>
            Find stocks with upcoming FDA dates and the details on their drugs,
            market potential, and competitors.
          </p>
        </div>
        <div class="img">
          <img
            src={testCard}
            //   style="height: 341px; border-radius: 24px; width: 320px;"
          />
        </div>
      </div>
      <div class="line"></div>
      <div class="coller-2">
        <div class="img">
          <img src={testCard} />
        </div>
        <div class="txt">
          <h2>Dynamic Watchlist</h2>
          <p>
            Find stocks with upcoming FDA dates and the details on their drugs,
            market potential, and competitors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
