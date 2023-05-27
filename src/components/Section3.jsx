import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

let sliders = [];

sliders.push(
  <div className="question-box">
    <span>1 of 5</span>
    <h3>Do you want to see how Nancy Pelosi has been trading the market? </h3>
    <button onClick={() => nextSlideCustom()}>
      Yes
    </button>
    <button onClick={() => nextSlideCustom()}>
      No
    </button>
  </div>
);

sliders.push(
  <div className="question-box">
    <span>2 of 5</span>
    <h3>Do you want a breakdown of stocks based off their financial ratios? </h3>
    <button onClick={() => nextSlideCustom()}>
      Yes
    </button>
    <button onClick={() => nextSlideCustom()}>
      No
    </button>
  </div>
);

sliders.push(
  <div className="question-box">
    <span>3 of 5</span>
    <h3>Do you want to see the portfolio composition of the biggest hedge funds? </h3>
    <button onClick={() => nextSlideCustom()}>
      Yes
    </button>
    <button onClick={() => nextSlideCustom()}>
      No
    </button>
  </div>
);

sliders.push(
  <div className="question-box">
    <span>4 of 5</span>
    <h3>Do you want to see which stocks have the most insider trading activity? </h3>
    <button onClick={() => nextSlideCustom()}>
      Yes
    </button>
    <button onClick={() => nextSlideCustom()}>
      No
    </button>
  </div>
);

sliders.push(
  <div className="question-box">
    <span>5 of 5</span>
    <h3>Do you want to combine all of this data? </h3>
    <button onClick={() => nextSlideCustom()}>
      Yes
    </button>
    <button onClick={() => nextSlideCustom()}>
      No
    </button>
  </div>
);

sliders.push(
  <div className="question-box question-box-last">
    <h3>Seems like StockAlgos is suitable to you. <br /> Would you like to give us a try? </h3>
    <button className="violet-fill-btn">
      Try at $0 for 7 days
    </button>
    <p class="small-text"><s>$214.00</s> $99/month after</p>
  </div>
);



const nextSlideCustom = () =>{
  document.getElementById('custom-right-btn').click();
}

const CustomRight = ({ onClick }) => {
  return (
  <button id="custom-right-btn" onClick={onClick}>
    
  </button>
  );
};

const Section3 = () => {
  return (
    <section class="container">
      <div>
        <h2 class="subtitle">Find out if you’re interested</h2>
        <p class="small-text">
          Answer some questions to learn if you can be benefited from StockAlgos
          Unlimited.
        </p>
        <div class="question-slider">

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<CustomRight />}
   
        >
          {sliders}
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Section3;
