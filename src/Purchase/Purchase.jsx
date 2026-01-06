import React, { useState } from "react";
import styles from "./Purchase.module.css";
import { useLocation } from "react-router-dom";

const Purchase = () => {

  const location = useLocation();
  const image = location.state?.image; // get passed image URL
  
  const [qty, setQty] = useState(1);
  const [quality, setQuality] = useState("Normal");

  return (
    <section className={styles.section}>
      <div className={styles.main}>
        
        {/* Product Image */}
        <img src={image} className={styles.preview} />

        {/* Title */}
        <h2 className={styles.title}>Purchase Item</h2>

        {/* Quantity Selector */}
        <div className={styles.box}>
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>

        {/* Quality Selector */}
        <div className={styles.box}>
          <label>Select Quality:</label>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            <option>Normal</option>
            <option>Premium</option>
            <option>High Quality</option>
          </select>
        </div>

        {/* Button */}
        <button className={styles.btn}>
          Done
        </button>

      </div>
    </section>
  );
};

export default Purchase;
