import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Dog} from "./Dog";
import {Pagination} from "../Pagination/Pagination";
import styles from './Dogs.module.css';
import {getAllDogs} from "../../actions";

const Dogs = () => {

    const dispatch = useDispatch();
    const results = useSelector(state => state);
    const breeds = results.breeds;
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8);

    //Llamado a la API
    useEffect(() => {
        dispatch(getAllDogs())
    }, [])


    //Paginado

    const indexOfLastDogs = currentPage * dogsPerPage;
    const indexOfFirstDogs = indexOfLastDogs - dogsPerPage;
    const currentDogs = breeds.slice(indexOfFirstDogs, indexOfLastDogs);
//Cambio de pagina
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className={styles.container}>
            <div>
                <h2>Razas</h2>
            </div>
            <div className={styles.containerDogs}>
                {
                    currentDogs.map(dog => (
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
            <Pagination dogsPerPage={dogsPerPage} totalDogs={breeds.length} paginate={paginate}/>
        </div>
    )
}

export default (Dogs);
