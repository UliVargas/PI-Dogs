import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {searchDogs} from "../../Redux/actions";
import styles from "./Search.module.css"
import {useHistory } from "react-router-dom";


const Search = () => {

    const History = useHistory();


    const dispatch = useDispatch()
    const [search, setSearch] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        History.push('/home?search=' + search)
    }

    useEffect(() => {
       dispatch(searchDogs(search));
    }, [dispatch, search])

    return(
        <div className={styles.container}>
            <form action="">
                <input type="text"
                       value={search}
                       onChange={e => setSearch(e.target.value)}
                       placeholder="Buscar Raza..."
                />
                <button
                    onClick={(e) => {
                        handleClick(e)
                    }}
                >Buscar
                </button>
            </form>
        </div>
    )
}

export default Search;