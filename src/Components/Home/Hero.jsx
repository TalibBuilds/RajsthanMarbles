import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 

// 🟢 NEW: Swiper CSS Import करें
import 'swiper/css';

import styles from "./Hero.module.css";

const SLIDES_DATA = [
  { id: 1, src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400" },
  { id: 2, src: "https://images.unsplash.com/photo-1576698483491-8c43f0862543?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhdGhyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400" },
  { id: 3, src: "https://plus.unsplash.com/premium_photo-1675616575244-54ab4547a929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhdGhyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400" },
  { id: 4, src: "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhdGhyb29tfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400" },
];

const HeroSwiper = () => { // कंपोनेंट का नाम बदला
    // ref अब Swiper के लिए जरूरी नहीं है, इसलिए इसे हटा दिया गया है या इस्तेमाल नहीं किया गया है।
  
    return (
        // 🟢 'maan' class Swiper रैपर के रूप में काम करेगी
        <div className={styles.maan}>
            
            <Swiper
                // 🟢 NEW: Autoplay मॉड्यूल का उपयोग करें
                modules={[Autoplay]} 
                
                // 🟢 Autoplay Settings:
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false, // यूजर क्लिक करने के बाद भी चलता रहेगा
                }}
                
                // 🟢 Swiper Settings (आपके CSS के अनुसार 3-4 स्लाइड्स):
                spaceBetween={40} // आपके CSS gap: 40px के समान
                slidesPerView={3} // एक बार में 3 स्लाइड दिखाएं
                loop={true}       // अनंत स्क्रॉलिंग के लिए
                className={styles.main} // 'main' class Swiper कंटेनर के रूप में उपयोग करें
            >
                {SLIDES_DATA.map((slide) => (
                    <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                        {/* <img> को सीधे SwiperSlide के अंदर रखें, या आपके CSS के अनुसार */}
                        <div className={styles.img}> 
                            <img src={slide.src} alt={`Bathroom view ${slide.id}`} loading="lazy" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSwiper;