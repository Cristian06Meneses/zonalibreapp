"use client";

import Link from "next/link";
import styles from "./styles/header.module.css";
import Image from "next/image";
import { useState } from "react";
import { inter_tight } from "./fonts";

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
          <span className={`${inter_tight.className} antialiased`}>
            <Link href="/">
              <Image
                src="/zonalibrelogo2.png"
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
              <span className={`${inter_tight.className} antialiased`}>
                <Link href="/sobrenosotros">Sobre Nosotros</Link>
              </span>
            </li>
            <li>
              <span className={`${inter_tight.className} antialiased`}>
                <Link href="/productos">Productos</Link>
              </span>
            </li>
            <li>
              <span className={`${inter_tight.className} antialiased`}>
                <Link href="/contacto">Contacto</Link>
              </span>
            </li>
          </ul>
        </nav>

        {/* Botón de acción */}
        <div className={styles.cta}>
          <span className={`${inter_tight.className} antialiased`}>
            <Link href="/contacto">¡Contáctanos!</Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
