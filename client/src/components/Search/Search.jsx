import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {loadResult} from "../../actions";
import {useHistory} from "react-router-dom";
import {useQuery} from "../../Hooks/useQuery";
import styles from "./Search.module.css"


const Search = () => {
    const query = useQuery();
    const searchBar = query.get('search')

    const dispatch = useDispatch()
    const [search, setSearch] = useState("");
    const History = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        History.push('/home?search=' + search)
        dispatch(loadResult(search))
    }

    useEffect(() => {
        setSearch(searchBar || '')
    }, [searchBar])

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