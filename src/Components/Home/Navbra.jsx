import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from("nav", {
      y: -10,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Hamburger animation class toggle
    const hamburger = document.querySelector(`.${styles.hamburger}`);
    if (hamburger) {
      hamburger.classList.toggle('active');
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* LOGO LEFT */}
      <Link to="/" className={styles.logoContainer}>
        <img src="../images/o.png" alt="Logo" className={styles.logo} />
      </Link>

      {/* CENTER MENU - DESKTOP ONLY */}
      <div className={styles.left}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>HOME</NavLink></li>
          <li><NavLink to="/marbals" className={({ isActive }) => (isActive ? styles.active : "")}>MARBALS</NavLink></li>
          <li><NavLink to="/tiles" className={({ isActive }) => (isActive ? styles.active : "")}>TILES</NavLink></li>
          <li><NavLink to="/sanitary" className={({ isActive }) => (isActive ? styles.active : "")}>SANITARY SEC</NavLink></li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <Link to="/Contact" className={styles.contactLink}>
          <h3>CONTACT</h3>
        </Link>
        <Link to="/login">
          <button className={styles.login}>Login</button>
        </Link>
        
        {/* HAMBURGER BUTTON */}
        <div 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div 
          className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.show : ''}`} 
          onClick={toggleMenu}
        >
          <div className={styles.mobileMenu}>
            <NavLink 
              to="/" 
              className={({ isActive }) => ` ${styles.mobileLink} ${isActive ? styles.active : ''}`}
              onClick={toggleMenu}
            >
              HOME
            </NavLink>
            <NavLink 
              to="/marbals" 
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
              onClick={toggleMenu}
            >
              MARBALS
            </NavLink>
            <NavLink 
              to="/tiles" 
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
              onClick={toggleMenu}
            >
              TILES
            </NavLink>
            <NavLink 
              to="/sanitary" 
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
              onClick={toggleMenu}
            >
              SANITARY SEC
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
