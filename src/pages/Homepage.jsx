import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ImagesSlider from "../components/ImagesSlider";
import FeaturedBrands from "../components/FeaturedBrands";
import QuestionSlider from "../components/QuestionSlider";
import Offers from "../components/Offers";
import TestimonialSlider from "../components/TestimonialSlider";
import StarFeatures from "../components/StarFeatures";
import Section6 from "../components/Section6";
import Navigation from "../components/Navigation";

const Homepage = () => {
  return (
    <div className="body subscription-page">
      <Navigation />
      <Hero />
      <ImagesSlider />
      <FeaturedBrands />
      <QuestionSlider />
      <Offers />
      <TestimonialSlider />
      <StarFeatures />
      <Section6 />
      <Footer />
    </div>
  );
};

export default Homepage;
