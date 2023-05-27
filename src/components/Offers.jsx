import React from "react";
import img from "../assets/images/offer1.png";

const Offers = () => {
  return (
    <section className="offers">
      <div className="container">
        <p className="offer-text">With StockAlgos Unlimited </p>
        <h1 className="offer-heading">You will know what you don’t know</h1>
        <div className="offer-div">
          <div className="offer-sub-div">
            <p>
              Track the portfolios and stock picks of famous investors like
              Warren Buffett, Ray Dalio, George Soros, and more.
            </p>
            <h5>Hedge Funds Analysis</h5>
          </div>
          <img src={img} />
        </div>
        <div className="offer-div">
          <img src={img} />
          <div className="offer-sub-div">
            <p>
              Evaluate companies based on their fundamental ratios and metrics
              such as earnings, dividends, growth, and valuation.
            </p>
            <h5>Fundamentals</h5>
          </div>
        </div>
        <div className="offer-div">
          <div className="offer-sub-div">
            <p>
              Find stocks with upcoming FDA dates and the details on their
              drugs, market potential, and competitors.
            </p>
            <h5>FDA Stock Analysis</h5>
          </div>
          <img src={img} />
        </div>
        <h1 className="white-title">And there is much more data.</h1>
        <p className="offer-light-text">
          Absorb the information and make informed trading decisions. That’s
          what we call trade like a PRO.
        </p>
      </div>
    </section>
  );
};

export default Offers;
