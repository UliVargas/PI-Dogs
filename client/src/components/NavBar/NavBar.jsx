import { Link } from 'react-router-dom'
import { Search } from "../Search/Search";
import styles from './NavBar.module.css';
import Logo from '../../img/logo2.png';

export function Nav() {
    return(
        <div className={styles.nav}>
            <Search />
            <Link to="/">
                <h1><img src={Logo} alt="" className={styles.logo}/></h1>
            </Link>
            <h3>Seleccion Multiple</h3>
        </div>
    )
} 