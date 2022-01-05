import React from "react";
import BestSellers from "../../components/Home/BestSellers";
import HeroSection from "../../components/Home/HeroSection";
import LilAbout from "../../components/Home/LilAbout";
import MainProduct from "../../components/Home/MainProduct";
import NewProducts from "../../components/Home/NewProducts";

const Home = () => {

  return (
    <>
      <HeroSection />
      <LilAbout />
      <NewProducts />
      <MainProduct />
      <BestSellers />
    </>
  );
};

export default Home;
