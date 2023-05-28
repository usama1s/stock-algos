import React from "react";
import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/star2.png";

const StarFeatures = () => {
  return (
    <section className="container">
      <div class="star-p">
        <div class="top-h">
          <span>🌟</span>
          <h2 className="title">Star Features</h2>
        </div>
        <div>
          <div class="coller-2">
            <div class="txt">
              <h2 className="sup-text">Signals</h2>
              <p className="text">
                Find stocks with upcoming FDA dates and the details on their
                drugs, market potential, and competitors.
              </p>
            </div>
            <div class="img">
              <img src={star1} />
            </div>
          </div>
          <div class="coller-2">
            <div class="img">
              <img src={star2} />
            </div>
            <div class="txt">
              <h2 className="sup-text">Dynamic Watchlist</h2>
              <p className="text">
                Find stocks with upcoming FDA dates and the details on their
                drugs, market potential, and competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarFeatures;
