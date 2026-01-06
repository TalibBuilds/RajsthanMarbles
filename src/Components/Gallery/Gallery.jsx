import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";

const API_KEY =
  import.meta.env.VITE_PEXELS_API_KEY ||
  "wbc1tG7V46RNfqPpfIYH5bbx2UPYygslZJgCEOeaDQULr3A781kPXVQF";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef(null);

  // Fetch photos
  const fetchPhotos = useCallback(async () => {
    setLoading(true);

    try {
      const url = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;

      const res = await axios.get(url, {
        headers: {
          Authorization: API_KEY,
        },
      });

      // Append new images
      setPhotos((prev) => [...prev, ...res.data.photos]);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Run API on every page change
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // IntersectionObserver — Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <motion.div
      className={styles.galleryContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={styles.galleryGrid}>
        {photos.map((pic) => (
          <Link
            to={`/image/${pic.id}`}
            key={pic.id}
            className={styles.linkWrapper}
          >
            <motion.div
              className={styles.galleryItem}
              whileHover={{ scale: 1.04, opacity: 0.6 }}
              transition={{ duration: 0.25 }}
            >
              <div className={styles.shimmerWrapper}></div>

              <img
                src={pic.src.medium}
                alt={pic.alt || "Photo"}
                loading="lazy"
                decoding="async"
                className={`${styles.fadeIn}`}
                onLoad={(e) => e.target.classList.add(styles.loaded)}
              />
              <Link
                to="/purchase"
                state={{ image: pic.src.medium }} // ← passing image URL
              >
                <button className={styles.addtocart}>Add to Cart</button>
              </Link>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      <div ref={loaderRef} className={styles.loader}>
        {loading && <p>Loading more...</p>}
      </div>
    </motion.div>
  );
};

export default Gallery;
