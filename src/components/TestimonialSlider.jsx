import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import sliderImg1 from "../assets/images/Slider-image-01.jpg";
import sliderImg2 from "../assets/images/Slider-image-02.jpg";
import sliderImg3 from "../assets/images/Slider-image-03.jpg";
import sliderImg4 from "../assets/images/Slider-image-04.jpg";
import sliderImg5 from "../assets/images/Slider-image-05.jpg";



let sliders = [];

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);

sliders.push(
  <div className="testimonial">
    <h2>
      “Lorem ipsum dolor sit amet <span> consectetur</span>. Leo sem cras luctus
      neque. Egestas mauris leo netus sed tellus urna duis. Egestas mauris leo
      netus sed tellus urna duis. Egestas mauris leo netus.“
    </h2>

    <p>- Testimonial by You</p>
  </div>
);



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};




const TestimonialSlider = () => {
  return (
 

    <section className="testimonial-slider">
      <h2 class="subtitle">Folks are already talking</h2>
      <div className="">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {sliders}
        </Carousel>
      </div>
    </section>


  );
};

export default TestimonialSlider;
