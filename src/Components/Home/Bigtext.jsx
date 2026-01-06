import React from "react";
import styles from "./Bigtext.module.css";


const Bigtext = () => {



  return (
    <div className={styles.bigtext} >
      <span id={styles.span2} className={styles.scrollingText}>Get Exclusive Deals, Premium Services, And Unbeatable Quality Guaranteed Just For You Today </span>
    <h1 className={styles.h1}>Our Dream to give you Best Services.</h1>
    
    {/* The animated container */}
    <div className={styles.animate} >
      {/* Duplicate the content inside the animated container */}
      <span id={styles.span1} className={styles.scrollingText}>Get Exclusive Deals, Premium Services, And Unbeatable Quality Guaranteed Just For You Today </span>
    </div>
  </div>
  ); 
};

export default Bigtext;

