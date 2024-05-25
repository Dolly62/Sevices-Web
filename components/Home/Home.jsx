import React from "react";
import Banner from "../shared/Banner";
import home from "../assets/home.png"
import Service from "./Service";
import HomeSection3 from "./HomeSection3";
import Pricing from "./Pricing";

const Home = () => {
  return (<>
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        home={home}
        heading="Welcome to SheetSight Empowering Your Data Journey"
        btn="Start Now"
      />
    </div>
    <Service/>
    <HomeSection3/>
    <Pricing/>
    </>
  );
};

export default Home;
