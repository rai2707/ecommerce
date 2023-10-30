import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Shivam Mart",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
      
    </>
  );
};

export default Home;
