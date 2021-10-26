import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Dog from './Dog'

import styles from './Dogs.module.css';
import {fetchDogs, fetchTemperaments} from "../../Redux/actions/";
import Spinner from "../Spinner/Spinner";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";

const Dogs = () => {


    const dispatch = useDispatch();
    const {breeds, loading} = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchDogs())
        dispatch(fetchTemperaments())
    }, [dispatch])



    return (
        <>
        
        {
            loading ? (
                <Spinner />
            ) : (
                <div className={`container ${styles.container}`}>
                <div className={styles.components}>
                    <Search />
                    <Order/>
                    <Filter/>
                </div>
            <div className={styles.containerDogs}>
                {
                    breeds.map(dog => (
                        <Dog name={dog.name}
                             temperaments={dog.temperaments}
                             weight={dog.weight}
                             img={dog.img}
                             key={dog.id}
                             id={dog.id}
                        />
                    ))
                }
            </div>
        </div>

         )}
    </>
    )
}

export default Dogs;
