import {Link} from 'react-router-dom'
import styles from './NavBar.module.css';
import Logo from '../../img/logo2.png';

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