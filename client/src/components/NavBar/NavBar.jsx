import {Link} from 'react-router-dom'
import styles from './NavBar.module.css';
import Logo from '../../img/logo.png';
import {fetchDogs} from "../../Redux/actions/";
import { useDispatch } from 'react-redux';

const Nav = () => {

    const dispatch = useDispatch()
    const handleClick = (e) => {
        dispatch(fetchDogs())
    }
  

    return (
        <div className={styles.container}>
            <div className={styles.nav}>

                <Link to="/home">
                    <img src={Logo} alt="" className={styles.logo}/>
                </Link>
                <div>
                <Link to={"/dog/add"} className={styles.addBreed}>
                        Add Dog
                </Link>
                <button onClick={(e) => handleClick(e)} className={styles.clearOptions}>
                    Clear Options
                </button>
                </div>
            </div>
        </div>
    )
}

export default Nav;