
import styles from './Home.css';
import Dogs from "../Dogs/Dogs";
import Nav from '../NavBar/NavBar';
import Footer from "../Footer/Footer";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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