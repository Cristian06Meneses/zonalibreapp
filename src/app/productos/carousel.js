"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/Carousel.module.css";

const images = [
  "/marcas/marca1.jpg",
  "/marcas/marca2.jpg",
  "/marcas/marca3.png",
  "/marcas/marca4.png",
  "/marcas/marca5.png",
  "/marcas/marca6.png",
  "/marcas/marca7.png",
  "/marcas/marca8.jpg",
  "/marcas/marca9.png",
  "/marcas/marca10.jpg",
  "/marcas/marca11.jpg",
  "/marcas/marca12.png",
  "/marcas/marca13.png",
  "/marcas/marca14.png",
  "/marcas/marca15.png"
];

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 200; // Ajusta el desplazamiento
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        ) {
          carouselRef.current.scrollLeft = 0; // Reinicia el scroll
        }
      }
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Marca ${index + 1}`} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
