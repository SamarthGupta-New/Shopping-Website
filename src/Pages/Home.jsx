import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import { BestSeller } from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";
import NewletterBox from "../Components/NewletterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewletterBox />
    </div>
  );
};

export default Home;
