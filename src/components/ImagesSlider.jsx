import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import sliderImg1 from "../assets/images/Slider-image-01.jpg";
import sliderImg2 from "../assets/images/Slider-image-02.jpg";
import sliderImg3 from "../assets/images/Slider-image-03.jpg";
import sliderImg4 from "../assets/images/Slider-image-04.jpg";
import sliderImg5 from "../assets/images/Slider-image-05.jpg";

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

const customDotText = [
  "Insider Transactions Tracking",
  "Fundamentals",
  "FDA Stocks",
  "Congress Traded Transactions",
  "Hedge Funds Analysis",
];

let sliders = [];

sliders.push(
  <div className="img">
    <img src={sliderImg1} />
  </div>
);
sliders.push(
  <div className="img">
    <img src={sliderImg2} />
  </div>
);
sliders.push(
  <div className="img">
    <img src={sliderImg3} />
  </div>
);
sliders.push(
  <div className="img">
    <img src={sliderImg4} />
  </div>
);
sliders.push(
  <div className="img">
    <img src={sliderImg5} />
  </div>
);


const CustomDot = ({ onMove, index, onClick, active }) => {
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
      {customDotText[index]}
      &nbsp;
      <span>{index+1 + "/" + sliders.length}</span>
    </li>
  );
};

const ImagesSlider = () => {
  return (
    <section className=" imgs-slider">
      <div className="">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          customDot={<CustomDot />}
        >
          {sliders}
        </Carousel>
      </div>
    </section>
  );
};

export default ImagesSlider;
