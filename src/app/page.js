import styles from "./styles/page.module.css";
import { inter_tight } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Primera sección */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={`${inter_tight.className} antialiased`}>Bienvenido a Zona Libre Ferreteria</h1>
          <p className={`${inter_tight.className} antialiased`}>Todo lo que necesitas para construir tus sueños</p>
        </div>
      </section>

      {/* Segunda sección */}
      <section className={styles.productSection}>
        <div className={styles.content}>
          <Link href="/productos">
            <h2 className={`${inter_tight.className} antialiased`}>Nuestros Productos</h2>
            <p className={`${inter_tight.className} antialiased`}>Descubre nuestra variedad de productos cuidadosamente seleccionados.</p>
          </Link>
        </div>
      </section>

      {/* Tercera sección */}
      <section className={styles.contactSection}>
        <div className={styles.content}>
          <Link href="/contacto">
            <h2 className={`${inter_tight.className} antialiased`}>Contáctanos</h2>
            <p className={`${inter_tight.className} antialiased`}>Estamos aquí para ayudarte a encontrar lo que necesitas.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
