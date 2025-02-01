import { inter_tight } from "../fonts";
import styles from "../styles/productos.module.css";
import Carousel from "./carousel";
import Image from "next/image";

export default function Page() {
    return (
        <div className={styles.home}>
            <Carousel />
            <Section title="Herramientas" image="/zlimg8h.jpg" />
            <Section title="Aerosoles" image="/zlimg6h.jpg" />
            <Section title="Tubería" image="/zlimg1h.jpg" />
            <Section title="Cuerdas" image="/zlimg2h.jpg" />
            <Section title="Tornillería" image="/zlimg3h.jpg" />
            <Section title="Cintas" image="/zlimg7h.jpg" />
            <Carousel />
        </div>
    );
}

function Section({ title, image }) {
    return (
        <section className={styles.productSection}>
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className={styles.backgroundImage}
            />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={`${inter_tight.className} ${styles.titulo} antialiased`}>{title}</h1>
            </div>
        </section>
    );
}
