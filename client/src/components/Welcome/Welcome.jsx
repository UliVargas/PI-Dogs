import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTemperaments } from '../../Redux/actions';
import styles from './Welcome.module.css';


const Welcome = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTemperaments())
    })

    return (
        <section className={`${styles.container}`}>
            <div className={`${styles.Welcome}`}>
                <h1>Bienvenido a la App de Perritos</h1>
                <h3>Aprende información y caracteristicas de nuestros peludos amigos</h3>
                <Link to='/home'>
                    <button>Comenzar</button>
                </Link>
            </div>
        </section>
    )
}

export default Welcome;