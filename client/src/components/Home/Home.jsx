
import styles from './Home.module.css';
import Dogs from "../Dogs/Dogs";
import Nav from '../NavBar/NavBar';

const Home = () => {


    return (
        <div className={styles.home}>
            <Nav />
            <Dogs />
        </div>
    )
}

export default Home;