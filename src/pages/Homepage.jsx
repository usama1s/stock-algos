import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Offers from "../components/Offers";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Offers />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default Homepage;
