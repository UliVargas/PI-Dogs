import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchTemperaments } from '../../Redux/actions';
import styles from './Welcome.module.css';


const Welcome = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        console.log("hola")
        dispatch(fetchTemperaments())
    }, [])

    return (
        <section className={`${styles.container}`}>
            <div className={`${styles.Welcome}`}>
                <h1>Welcome to the Puppies App</h1>
                <h3>Learn information and characteristics of our furry friends</h3>
                <Link to='/home'>
                    <button>Go To Home</button>
                </Link>
            </div>
        </section>
    )
}

export default Welcome;