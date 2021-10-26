import {Link} from 'react-router-dom'
import Search from "../Search/Search";
import styles from './NavBar.module.css';
import Logo from '../../img/logo2.png';
import Order from "../Order/Order";
import Filter from '../Filter/Filter'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {actualPage, fetchDogs} from "../../Redux/actions";

const Nav = () => {

    return (
        <div className={styles.container}>
            <div className={styles.nav}>

                <Link to="/home">
                    <img src={Logo} alt="" className={styles.logo}/>
                </Link>
                <Link to={"/dog/add"}>
                        Add Dog
                </Link>
            </div>
        </div>
    )
}

export default Nav;