import React, { useMemo } from 'react'; // 🟢 NEW: useMemo का उपयोग करें
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper CSS imports (इन्हें App.jsx में रखने से बेहतर परफॉर्मेंस मिल सकती है)
import 'swiper/css';
import 'swiper/css/navigation'; 

import styles from './SwiperComponent.module.css';

// 🟢 Optimization 1: स्लाइड डेटा को कंपोनेंट के बाहर रखें
// इससे कंपोनेंट के हर बार रेंडर होने पर डेटा रीक्रिएट नहीं होता।
const SLIDES_DATA = [
  { id: 1, src: '../images/alltiles.webp', alt: 'We have All Veraity' },
  { id: 2, src: '../images/bead.webp', alt: 'Modern Bed Room' },
  { id: 3, src: '../images/kitchen.jpg', alt: 'Screch Proof' },
  { id: 4, src: '../images/bath.webp', alt: 'Cozy Bathroom' },
];

const SwiperComponent = () => {
  
  // 🟢 Optimization 2: Configuration को useMemo से Wrap करें
  // इससे कॉम्पोनेंट के re-render होने पर Swiper config ऑब्जेक्ट बार-बार रीक्रिएट नहीं होगा।
  const swiperConfig = useMemo(() => ({
    modules: [Navigation, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: `.${styles.swiperButtonNext}`,
      prevEl: `.${styles.swiperButtonPrev}`,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    className: styles.mySwiper,
  }), []); // Dependency Array empty है, मतलब सिर्फ एक बार बनेगा

  return (
    <div className={styles.swiperContainerWrapper}>
      <Swiper {...swiperConfig}> {/* 🟢 NEW: Config को Spread करें */}
        {SLIDES_DATA.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.swiperSlide}>
            {/* 🟢 Optimization 3: Lazy Loading (CSS में भी लागू होता है) */}
            <img 
              src={slide.src} 
              alt={slide.alt} 
              className={styles.slideImage} 
              loading="lazy" // ब्राउज़र-लेवल Lazy Loading
            />
            <div className={styles.slideCaption}>{slide.alt}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons (Fix) */}
      <div 
        className={styles.swiperButtonPrev}
        data-swiper-autoplay="false" // सुनिश्चित करता है कि Autoplay प्रभावित न हो
      >
        &#10094;
      </div>
      <div 
        className={styles.swiperButtonNext}
        data-swiper-autoplay="false"
      >
        &#10095;
      </div>
    </div>
  );
};

export default SwiperComponent;