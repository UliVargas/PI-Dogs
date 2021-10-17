import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllDogs, getDogDetails} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./DogDetails.module.css"
import {Footer} from "../Footer/Footer";

const DogDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const details = useSelector(state => state)

    const onHandleClick = () => {
        getAllDogs()
    }

        useEffect(() => {
            dispatch(getDogDetails(id))
        },[])
    console.log(details)
    return (
        <div className={styles.container}>
            <Link to={"/home"}>
                <button onClick={() => dispatch(getAllDogs())}>Atras</button>
            </Link>
            <div className={styles.containerDetails}>
                <div className={styles.img}>
                    <img src={details.breeds.img} alt=""/>
                </div>
                <div className={styles.details}>
                    <h3>{details.breeds.name}</h3>
                    <p>{details.breeds.temperaments}</p>
                    <p>{details.breeds.height}</p>
                    <p>{details.breeds.weight}</p>
                    <p>{details.breeds.life_span}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DogDetails;