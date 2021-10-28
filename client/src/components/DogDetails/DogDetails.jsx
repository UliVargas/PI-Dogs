import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./DogDetails.module.css";
import {fetchDogsId} from "../../Redux/actions";
import NotFound from "../NotFound/NotFound"
import Spinner from '../Spinner/Spinner';
import arrowBack from "../../img/arrow-left.svg"

const DogDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {breed, loading} = useSelector(state => state)


    useEffect(() => {
        dispatch(fetchDogsId(id))
    }, [dispatch, id])


    let validationBreed = true;
        if(breed === "") {
            validationBreed = false;
        };
    return (
        <>
            {
                
                loading ? (
                    <Spinner/>
                ) : (

                    <div className={styles.container}>
                        <Link to={"/home"}>
                                <img src={arrowBack} alt=""/>
                                Back
                        </Link>
                        <div className={styles.containerDetails}>
                            <div className={styles.img}>
                                <img src={breed.img} alt=""/>
                            </div>
                            <div className={styles.details}>
                                <h2>{breed.name}</h2>
                                <div className={styles.detailsDates}>
                                    <p>
                                        Temperaments:
                                    <span> {breed.temperaments}</span>
                                    </p>
                                </div>
                                <div className={styles.detailsDates}>
                                    <p>
                                        Height:<span> {breed.height} cm</span>
                                    </p>
                                </div>
                                <div className={styles.detailsDates}>
                                    <p>
                                        Weight:
                                        <span> {breed.weight} Kg</span>
                                    </p>
                                </div>
                                <div className={styles.detailsDates}>
                                    <p>
                                        Life:
                                        <span> {breed.life_span}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default DogDetails;