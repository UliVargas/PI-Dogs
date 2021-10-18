import Footer from '../Footer/Footer';
import Nav  from '../NavBar/NavBar';
import styles from './Home.module.css';
import Dogs from "../Dogs/Dogs";

const Home = () => {


    return (
        <div className={styles.home}>
            <Nav/>
            <Dogs />
            <Footer/>
        </div>
    )
}

export default Home;