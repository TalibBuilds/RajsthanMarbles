import React from "react";
import styles from "./Verification.module.css";
import { Link } from "react-router-dom";

const Verification = () => {
  return (

    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.icon}><img src="https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhhbmtzfGVufDB8fDB8fHww" alt="" /></div>

        <h1 className={styles.title}>Congratulations!</h1>

        <p className={styles.subtitle}>
          Sign up is successfully completed.
        </p>

        <Link to="/">
          <button className={styles.btn}>Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Verification;