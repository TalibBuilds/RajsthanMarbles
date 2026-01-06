import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footerContent}>

        {/* Brand Info */}
        <div className={styles.footerBox}>
          <h2 className={styles.logo}>✨ Rajsthan Marbles & Tiles</h2>
          <p className={styles.desc}>
            Premium Marbles, Tiles & Sanitary ware — where luxury meets durability.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerBox}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/marbals">Marbles</Link></li>
            <li><Link to="/tiles">Tiles</Link></li>
            <li><Link to="/sanitary">Sanitary</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerBox}>
          <h3>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <a href="tel:+918979896077"><FaPhoneAlt /> +91 8979896077</a>
            </li>
            <li>
              <a href="mailto:rajsthanmarbals21@gmail.com">
                <FaEnvelope /> rajsthanmarbals21@gmail.com
              </a>
            </li>
            <li><FaMapMarkerAlt /> UP Etawah 206001, India</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className={styles.footerBox}>
          <h3>Follow Us</h3>
          <div className={styles.socials}>
            
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>

            <a href="https://www.instagram.com/trainwith_beast/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 & 26 Rajsthan Marbals & Tiles. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
