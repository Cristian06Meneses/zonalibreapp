import Link from "next/link";
import styles from "./styles/footer.module.css";
import { inter_tight } from "./fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sección de enlaces */}
        <div className={styles.links}>
          <ul className={`${inter_tight.className} antialiased`}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/sobrenosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className={styles.socials}>
          {/*<Link href="https://facebook.com">
            <Image
              src="/facebookIcon.png"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>*/}
          <Link href="https://maps.app.goo.gl/JfpAuMvhXuwAF4Za6">
            <Image
              src="/mapsIcon.png"
              alt="Google Maps"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.instagram.com/ferrezonalibre?igsh=MXBmNHphaGtpMms=">
            <Image
              src="/instagramIcon.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <span className={`${inter_tight.className} antialiased`}>© {new Date().getFullYear()} ZonaLibre. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
