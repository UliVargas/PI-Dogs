import { Link } from 'react-router-dom'
import { Search } from "../Search/Search";
import styles from './NavBar.module.css';
let logo = 'https://raw.githubusercontent.com/UliVargas/PI-Dogs/main/dog.png?token=APK5U4UXHYUIL2PK6PV344TBNERXM'


export function Nav() {
    return(
        <div className={styles.nav}>
            <Search />
            <Link to="/">
                <h1><img src={logo} alt="" className={styles.logo}/></h1>
            </Link>
            <h3>Seleccion Multiple</h3>
        </div>
    )
} 