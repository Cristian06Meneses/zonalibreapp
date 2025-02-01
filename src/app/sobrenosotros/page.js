import Image from "next/image";
import styles from "../styles/about.module.css";
import { inter_tight } from "../fonts";

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={`${inter_tight.className} antialiased`}>Sobre Nosotros</h1>
                    <p className={`${inter_tight.className} antialiased`}>Compromiso, calidad y liderazgo en el sector ferretero.</p>
                </div>
            </section>

            <section className={styles.aboutContent}>
                <div className={styles.text}>
                    <h2 className={`${inter_tight.className} antialiased`}>Nuestra Historia</h2>
                    <p className={`${inter_tight.className} antialiased`}>
                        Con 12 años de experiencia en el mercado, nos hemos consolidado como
                        líderes en la distribución de productos de ferretería, eléctricos y
                        materiales de construcción a nivel nacional. Desde nuestros inicios,
                        hemos trabajado con pasión y compromiso para ofrecer productos de la
                        más alta calidad a nuestros clientes, tanto al por mayor como al detal.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/zonalibrelogo.png"
                        alt="Nuestra Historia"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            <section className={styles.missionVision}>
                <div className={styles.block}>
                    <h2 className={`${inter_tight.className} antialiased`}>Misión</h2>
                    <p className={`${inter_tight.className} antialiased`}>
                        Brindar soluciones integrales en ferretería, electricidad y
                        construcción, garantizando calidad, precios competitivos y un
                        excelente servicio al cliente.
                    </p>
                </div>
                <div className={styles.block}>
                    <h2 className={`${inter_tight.className} antialiased`}>Visión</h2>
                    <p className={`${inter_tight.className} antialiased`}>
                        Ser la empresa líder en el sector, expandiendo nuestra presencia y
                        ofreciendo productos innovadores que contribuyan al desarrollo de
                        nuestros clientes y la industria en general.
                    </p>
                </div>
            </section>
        </div>
    );
}
