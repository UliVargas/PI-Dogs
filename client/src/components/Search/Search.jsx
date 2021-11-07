import React from "react";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {searchDogs} from "../../Redux/actions";
import styles from "./Search.module.css"
import searchIcon from "../../img/search.svg"


const Search = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState("");
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(searchDogs(search))
    }

    return(
        <div className={styles.container}>
            <form action="">
                <button
                    onClick={(e) => {
                        handleClick(e)
                    }}
                ><img src={searchIcon} alt="" className={styles.searchIcon}/>
                </button>
                <input type="text"
                       value={search}
                       onChange={e => setSearch(e.target.value)}
                       placeholder="Search Breed..."
                />
            </form>
        </div>
    )
}

export default Search;