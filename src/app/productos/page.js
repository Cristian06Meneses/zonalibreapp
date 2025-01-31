import { inter_tight } from "../fonts";
import styles from "../styles/productos.module.css"
import Carousel from "./carousel";

export default function Page() {
    return (
        <div className={styles.home}>
            <Carousel />
            <section className={styles.productos1}>
                <div className={styles.content}>
                    <h1 className={`${inter_tight.className} antialiased`}>Herramientas</h1>
                </div>
            </section>

            <section className={styles.productos2}>
                <div className={styles.content}>
                    <h1 className={`${inter_tight.className} antialiased`}>Aerosoles</h1>
                </div>
            </section>

            <section className={styles.productos3}>
                <div className={styles.content}>
                    <h1 className={`${inter_tight.className} antialiased`}>Tuberia</h1>
                </div>
            </section>

            <section className={styles.productos4}>
                <div className={styles.content}>
                    <h1 className={`${inter_tight.className} antialiased`}>Cuerdas</h1>
                </div>
            </section>

            <section className={styles.productos5}>
                <div className={styles.content}>
                    <h1 className={`${inter_tight.className} antialiased`}>Tornilleria</h1>
                </div>
            </section>

            <section className={styles.productos6}>
                <div className={styles.content}>
                    <h1 className={`${inter_tight.className} antialiased`}>Cintas</h1>
                </div>
            </section>

            <Carousel />
        </div>
    );
}