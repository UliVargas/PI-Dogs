import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Dog from './Dog'

import styles from './Dogs.module.css';
import {fetchDogs, fetchTemperaments, removeFetchDogsId} from "../../Redux/actions/";
import Spinner from "../Spinner/Spinner";
import Order from "../Order/Order";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import {Pagination} from "../Pagination/Pagination";

const Dogs = () => {

    const dispatch = useDispatch();
    const {breeds, loading} = useSelector(state => state);
    const totalBreeds = breeds.length;
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = breeds.slice(indexOfFirstItem, indexOfLastItem);


    useEffect(() => {
        dispatch(fetchDogs())
        dispatch(fetchTemperaments())
    }, [dispatch])

    useEffect(() => {
        setTimeout(() => {
            dispatch(removeFetchDogsId())
        }, 50)
    }, [dispatch])


    return (
        <>
            <div>

                {
                    loading ? (
                        <Spinner/>
                    ) : (
                        <div className={`container ${styles.container}`}>
                            <div className={styles.components}>
                                <Search/>
                                <Order/>
                                <Filter/>
                            </div>
                            <div className={styles.containerDogs}>
                                {
                                    currentItems.map(dog => (
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

            </div>
            <Pagination totalBreeds={totalBreeds} setcurrentPage={setcurrentPage} itemsPerPage={itemsPerPage}
                        maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit}
                        currentPage={currentPage} setmaxPageNumberLimit={setmaxPageNumberLimit}
                        setminPageNumberLimit={setminPageNumberLimit} pageNumberLimit={pageNumberLimit}/>
        </>
    )
}

export default Dogs;