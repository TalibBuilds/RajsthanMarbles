import React, { useEffect } from "react";
import styles from "./Verificationsss.module.css";
import confetti from "canvas-confetti";
import { motion } from "motion/react";

const Verification = () => {
  
  useEffect(() => {
    // Confetti burst on page load
    confetti({
      particleCount: 180,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      
      <div className={styles.card}>
        <div className={styles.circleGlow}></div>

        <h1 className={styles.title}>🎉 Congratulations!</h1>
        <h2 className={styles.subtitle}>Your Account is Successfully Created</h2>

        <img
          className={styles.profileImg}
          src="https://plus.unsplash.com/premium_photo-1686865496874-88f234809983?w=400&auto=format&fit=crop&q=60"
          alt="Success"
        />

        <button
          className={styles.btn}
          onClick={() => (window.location.href = "/")}
        >
          Return To Home →
        </button>
      </div>
    </div>
  );
};

export default Verification;
