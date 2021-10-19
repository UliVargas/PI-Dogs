import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./DogDetails.module.css"
import Footer from "../Footer/Footer";
import { fetchDogsId } from "../../Redux/actions";
import Spinner from '../Spinner/Spinner'

const DogDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const { breed, loading } = useSelector(state => state)

    
        useEffect(() => {
            dispatch(fetchDogsId(id))
        },[dispatch, id])

    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (

                <div className={styles.container}>
                    <Link to={"/home"}>
                 <button>Atrás</button>
             </Link>
             <div className={styles.containerDetails}>
                 <div className={styles.img}>
                     <img src={breed.img} alt=""/>
                 </div>
                 <div className={styles.details}>
                     <h3>{breed.name}</h3>
                     <p>{breed.temperaments}</p>
                     <p>{breed.height}</p>
                     <p>{breed.weight}</p>
                     <p>{breed.life_span}</p>
                 </div>
             </div>
             <Footer/>
            </div>
             )}
        </>
    )
}

export default DogDetails;