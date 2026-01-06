import React from "react";
import Collection from "./Collection";
import Heading from "./Heading";
import Hero from "./Hero";
import styles from "./Home.module.css";
import SwiperComponent from "./SwiperComponent";
import Bigtext from "./Bigtext";

const Home = () => {
  return (
    <div className={styles.home}>
      <SwiperComponent />
      <Heading
        heading="Evergreen beauty, the legacy of natural stones"
        paragraph="Craftsmanship meets enduring beauty."
      />
      <Hero />
      <Collection />
      <Bigtext/>
      <Heading
        heading="Unrivaled Quality & Contemporary Design"
        paragraph="Experience the pinnacle of sophisticated living."
        />
    </div>
  );
};

export default Home;
