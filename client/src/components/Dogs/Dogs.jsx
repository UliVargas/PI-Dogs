import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Dog from './Dog'

import styles from './Dogs.module.css';
import {fetchDogs} from "../../Redux/actions/";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";

const Dogs = () => {


    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {breeds, loading} = useSelector(state => state)
    

    //Llamada a API

    useEffect(() => {
        dispatch(fetchDogs())
    }, [dispatch])
    

    //Paginado

    const dogsPage = 8; //Cantidad de perros para mostrar.
    const totalDogs = breeds.length; //Guardo la longitud del estado de los perros.
    
    const indexOfLastDogs = currentPage * dogsPage;//Multiplico el estado inicial del current por la cantidad de perros a mostrar.
    const indexOfFirstDogs = indexOfLastDogs - dogsPage; //Resto a indexOfLastDogs la cantidad de perros para mostrar.
    const currentDogs = breeds.slice(indexOfFirstDogs, indexOfLastDogs);//Aplico un slice a el largo de dogs que es la variable que guarda a todos los perros. 
    



    return (
        <>
        
        {
            loading ? (
                <Spinner />
            ) : (
                <div className={styles.container}>
            <div>
                <h2>Breeds</h2>
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
            {totalDogs > dogsPage && (
                <Pagination 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalDogs={totalDogs}
                    dogPage={dogsPage}

                />
            )}
        </div>

         )}
    </>
    )
}

export default Dogs;
