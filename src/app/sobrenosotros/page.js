import { inter_tight } from "../fonts";
import styles from "../styles/page.module.css"

export default function Page() {
    return (
        <div className={styles.home}>
            <div className={`${inter_tight.className} antialiased`}>
                <h1 className={styles.h1}>Esta es la pagina sobre nosotros.</h1>
                <h1 className={styles.h1}>Esta es la pagina sobre nosotros.</h1>
                <h1 className={styles.h1}>Esta es la pagina sobre nosotros.</h1>
                <h1 className={styles.h1}>Esta es la pagina sobre nosotros.</h1>
            </div>
        </div>
    );
}