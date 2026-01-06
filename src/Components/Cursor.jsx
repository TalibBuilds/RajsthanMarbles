import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {
  // Single container ref for the single dot (वेरिएबल का नाम `cursorMoving` उपयोग किया गया)
  const cursorMoving = useRef(null);

  // 🟢 Step 1: Initial Setup - GSAP का उपयोग करके डॉट को opacity: 0 पर सेट करें
  useGSAP(
    () => {
      // यह सुनिश्चित करता है कि जब तक माउस विंडो में प्रवेश न करे, कर्सर छिपा रहे।
      gsap.set(cursorMoving.current, { opacity: 0 });
    },
    { scope: cursorMoving }
  );

  useEffect(() => {
    if (!cursorMoving.current) return;

    // --- A. Mouse Following Logic ---
    const moveFollower = (e) => {
      gsap.to(cursorMoving.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 2.5,
        

        duration: 0.6,
        ease: 'power2.out',
      });
    };

    // --- B. Mouse Enter/Leave Opacity Logic ---

    const handleMouseEnter = () => {
      // माउस प्रवेश पर: opacity 0.6 तक एनिमेट करें (आपकी शर्त के अनुसार)
      gsap.to(cursorMoving.current, { opacity: 0.6, duration: 0.4 });
    };

    const handleMouseLeave = () => {
      // माउस बाहर निकलने पर: opacity 0 पर एनिमेट करें
      gsap.to(cursorMoving.current, { opacity: 0, duration: 0.3 });
    };

    // Event Listeners जोड़ें
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", moveFollower);

    // Cleanup: कंपोनेंट अनमाउंट होने पर लिसनर हटाएँ
    return () => {
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      window.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  return (
    // ref को div से जोड़ें, क्लास नाम 'cursor' उपयोग किया गया है (आपके context के अनुसार)
    <div ref={cursorMoving} className={styles.cursor}></div>
  );
};

export default Cursor;
