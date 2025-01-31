"use client";

import styles from "../styles/contacto.module.css";
import { inter_tight } from "../fonts";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      {/* Encabezado */}
      <header className={styles.header}>
        <h1 className={`${inter_tight.className} antialiased`}>Contáctanos</h1>
        <p className={styles.subtitle}>
          Estamos aquí para ayudarte con cualquier duda o consulta.
        </p>
      </header>

      {/* Formulario de contacto */}
      <section className={styles.formSection}>
        <form className={styles.form}>
          <label className={`${inter_tight.className} antialiased`} htmlFor="name">Nombre</label>
          <input className={`${inter_tight.className} antialiased`} type="text" id="name" name="name" placeholder="Tu nombre" required />

          <label className={`${inter_tight.className} antialiased`} htmlFor="email">Correo Electrónico</label>
          <input className={`${inter_tight.className} antialiased`} type="email" id="email" name="email" placeholder="Tu correo electrónico" required />

          <label className={`${inter_tight.className} antialiased`} htmlFor="message">Mensaje</label>
          <textarea className={`${inter_tight.className} antialiased`} id="message" name="message" placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>

          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </section>

      {/* Información adicional */}
      <section className={styles.infoSection}>
        <div className={styles.info}>
          <h2>Visítanos</h2>
          <p>Cra. 57 # 51 - 157 Medellín</p>
        </div>
        <div className={styles.info}>
          <h2>Llámanos</h2>
          <p>+57 (316) 740-8673</p>
          <p>+57 (316) 740-8029</p>
        </div>
        <div className={styles.info}>
          <h2>Correo</h2>
          <p>invezb1@gmail.com</p>
        </div>
      </section>

      {/* Mapa de ubicación */}
      <section className={styles.mapSection}>
        <h2>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.87882843203494!2d-75.57398230875565!3d6.255660921646067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428fd85e61285%3A0xad3b8ba8c6cbb392!2sZona%20Libre%20Ferreteria!5e0!3m2!1ses-419!2sco!4v1738108527952!5m2!1ses-419!2sco"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa de ubicación"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
