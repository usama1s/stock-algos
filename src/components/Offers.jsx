import React from "react";
import offer1 from "../assets/images/offer1.png";
import offer2 from "../assets/images/offer2.png";
import offer3 from "../assets/images/offer3.png";

const Offers = () => {
  return (
    <section className="offers container">
      <div className="">
        <p className="offer-text">With StockAlgos Unlimited </p>
        <h2 className="title">You will know what you don’t know</h2>
        <div className="offer-div">
          <div className="offer-sub-div">
            <p className="sup-text">
              Track the portfolios and stock picks of famous investors like
              Warren Buffett, Ray Dalio, George Soros, and more.
            </p>
            <p className="sup-text">
              {" "}
              <span>Hedge Funds Analysis</span>
            </p>
          </div>
          <img src={offer1} />
        </div>
        <div className="offer-div">
          <img src={offer2} />
          <div className="offer-sub-div">
            <p className="sup-text">
              Evaluate companies based on their fundamental ratios and metrics
              such as earnings, dividends, growth, and valuation.
            </p>
            <p className="sup-text">
              {" "}
              <span>Fundamentals</span>
            </p>
          </div>
        </div>
        <div className="offer-div">
          <div className="offer-sub-div">
            <p className="sup-text">
              Find stocks with upcoming FDA dates and the details on their
              drugs, market potential, and competitors.
            </p>
            <p className="sup-text">
              {" "}
              <span>FDA Stock Analysis</span>
            </p>
          </div>
          <img src={offer3} />
        </div>
        <div className="bottom">
          <h5 className="sup-title">And there is much more data.</h5>
          <p className="sup-text">
            Absorb the information and make informed trading decisions. That’s
            what we call trade like a PRO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
