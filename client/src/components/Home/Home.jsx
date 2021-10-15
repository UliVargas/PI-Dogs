import { Footer } from '../Footer/Footer';
import { Nav } from '../NavBar/NavBar';
import styles from './Home.module.css';

export function Home() {
    return (
        <div className={styles.home}>
            <Nav />
            <Footer />
        </div>
    )
}