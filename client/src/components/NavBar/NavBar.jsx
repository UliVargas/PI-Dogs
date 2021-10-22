import { Link } from 'react-router-dom'
import Search from "../Search/Search";
import styles from './NavBar.module.css';
import Logo from '../../img/logo2.png';
import Order from "../Order/Order";
import Filter from '../Filter/Filter'

const Nav = () => {

    return(
        <div className={styles.container}>
            <div className={styles.nav}>
                <Search />
                <Link to="/home">
                    <h1><img src={Logo} alt="" className={styles.logo}/></h1>
                </Link>
                <Order/>
                <Filter/>
                <Link to={"/dog/add"}>
                    <p>Add Dog</p>
                </Link>
            </div>
        </div>
    )
}

export default Nav;