import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {getDogDetails} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./DogDetails.module.css"
import Footer from "../Footer/Footer";

const DogDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const details = useSelector(state => state)


        useEffect(() => {
            dispatch(getDogDetails(id))
        },[id])


    return (
        <div className={styles.container}>
             <Link to={"/home"}>
                 <button >Atrás</button>
             </Link>
             <div className={styles.containerDetails}>
                 <div className={styles.img}>
                     <img src={details.breed.img} alt=""/>
                 </div>
                 <div className={styles.details}>
                     <h3>{details.breed.name}</h3>
                     <p>{details.breed.temperaments}</p>
                     <p>{details.breed.height}</p>
                     <p>{details.breed.weight}</p>
                     <p>{details.breed.life_span}</p>
                 </div>
             </div>
             <Footer/>
        </div>
    )
}

export default (DogDetails);