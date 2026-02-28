import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Shared/Footer/Footer";
import BestSelling from "../Best-Selling/Best-Selling";
import OffersSection from "../Offer/Offer";
import StayConnect from "../StayConnect/StayConnect";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSelling />
      <OffersSection />
      <StayConnect />
    </div>
  );
};

export default Home;
