"use client";

import Link from "next/link";
import styles from "./styles/header.module.css";
import Image from "next/image";
import { useState } from "react";
import { alfa_slab_one } from "./fonts";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={`${alfa_slab_one.className} antialiased`}>
            <Link href="/">
              <Image
                src="/zonalibrelogo1.png"
                alt="ZonaLibre"
                layout="intrinsic"
                width={120}
                height={90}
              />
            </Link>
          </span>
        </div>

        {/* Botón de hamburguesa */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navegación */}
        <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
          <ul>
            <li>
              <span className={`${alfa_slab_one.className} antialiased`}>
                <Link href="/about">Sobre Nosotros</Link>
              </span>
            </li>
            <li>
              <span className={`${alfa_slab_one.className} antialiased`}>
                <Link href="/products">Productos</Link>
              </span>
            </li>
            <li>
              <span className={`${alfa_slab_one.className} antialiased`}>
                <Link href="/services">Servicios</Link>
              </span>
            </li>
            <li>
              <span className={`${alfa_slab_one.className} antialiased`}>
                <Link href="/contact">Contacto</Link>
              </span>
            </li>
          </ul>
        </nav>

        {/* Botón de acción */}
        <div className={styles.cta}>
          <span className={`${alfa_slab_one.className} antialiased`}>
            <Link href="/contact">¡Contáctanos!</Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
