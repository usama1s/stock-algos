import React from "react";

const Hero = () => {
  return (
    <section class="container banner">
      <div>
        <p class="unlimited-title">
          <span>
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.57436 6.60606L6.99453 7.25928C6.54785 7.70517 5.97902 8.00865 5.35992 8.13137C4.74082 8.25408 4.09924 8.19053 3.51625 7.94875C2.93325 7.70696 2.43501 7.29779 2.08449 6.77293C1.73396 6.24808 1.54688 5.6311 1.54688 4.99996C1.54688 4.36881 1.73396 3.75183 2.08449 3.22698C2.43501 2.70212 2.93325 2.29295 3.51625 2.05116C4.09924 1.80938 4.74082 1.74583 5.35992 1.86854C5.97902 1.99126 6.54785 2.29474 6.99453 2.74063L11.0064 7.25928C11.453 7.70517 12.0219 8.00865 12.641 8.13137C13.2601 8.25408 13.9016 8.19053 14.4846 7.94875C15.0676 7.70696 15.5659 7.29779 15.9164 6.77293C16.2669 6.24808 16.454 5.6311 16.454 4.99996C16.454 4.36881 16.2669 3.75183 15.9164 3.22698C15.5659 2.70212 15.0676 2.29295 14.4846 2.05116C13.9016 1.80938 13.2601 1.74583 12.641 1.86854C12.0219 1.99126 11.453 2.29474 11.0064 2.74063L10.4265 3.39385"
                stroke="white"
                stroke-width="2.5"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          StockAlgos Unlimited
        </p>
        <h1 class="title mx-659">The smarter way to search for stocks.</h1>
        <p class="text">
          Get access to tools and algorithms that help you find the best stocks
          to buy, sell, or hold. You can also get insights into how insiders,
          hedge funds, congress, and the government are trading the market.
        </p>
        <button class="violet-fill-btn">Try at $0 for 7 days</button>
        <p class="small-text">
          <s>$214.00</s> $99/month after
        </p>
      </div>
    </section>
  );
};

export default Hero;
