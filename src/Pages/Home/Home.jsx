import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Shared/Footer/Footer";
import BestSelling from "../Best-Selling/Best-Selling";
import OffersSection from "../Offer/Offer";

const Home = () => {
  return (
    <div>
      <Banner />
      <BestSelling />
      <OffersSection />
    </div>
  );
};

export default Home;
