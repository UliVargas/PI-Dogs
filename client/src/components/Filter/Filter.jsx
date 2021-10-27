import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fillterAll, filterByApi, filterByTemperament, filterByUser} from "../../Redux/actions";
import styles from "./Filter.module.css";


const Filter = () => {

    const dispatch = useDispatch();
    const {temperaments} = useSelector(state => state);
    const [filter, setFilter] = useState();

    useEffect(() => {
        if (filter === "api") {
            dispatch(filterByApi())
        }
        if (filter === "user") {
            dispatch(filterByUser())
        }
        if (filter === "all") {
            dispatch(fillterAll())
        }
    }, [filter, dispatch])


    const handleChange = async (temps) => {
        await dispatch(filterByTemperament(temps.toLowerCase()))
    }


    return (
        <div>
            <form className={styles.formFilter}>
                <div className={styles.filterTemps}>
                    <select name="temperaments" onChange={e => handleChange(e.target.value)} defaultValue>
                        <option value="">Filter By Temperaments</option>
                        {
                                temperaments.length > 0 && temperaments?.map(
                                    temp => (
                                        <option key={temp.id} value={temp.name}>{temp.name}</option>
                                    )
                                )
                            }
                    </select>
                </div>
                <div className={styles.filterExistence}>
                    <select name="existence" onChange={e => setFilter(e.target.value)} defaultValue>
                        <option value="">Filter By Existence</option>
                        <option value="all">All</option>
                        <option value="api">API</option>
                        <option value="user">User</option>
                    </select>
                </div>
            </form>
        </div>
    )

};

export default Filter;
