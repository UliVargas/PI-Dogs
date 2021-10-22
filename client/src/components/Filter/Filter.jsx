import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTemperaments, filterByApi, filterByTemperament, filterByUser} from "../../Redux/actions";

const Filter = () => {

    const dispatch = useDispatch();
    const {temperaments} = useSelector(state => state);
    const [filter, setFilter] = useState();


    useEffect(() => {
        dispatch(fetchTemperaments())
    }, [dispatch])

    useEffect(() => {
        if(filter === "api") {
            dispatch(filterByApi())
        }
        if(filter === "user") {
            dispatch(filterByUser())
        }
    },[filter, dispatch])


    const handleChange = async (temps) => {
        await dispatch(filterByTemperament(temps.toLowerCase()))
    }


    return (
        <div>
            <form>
                <p>Filtrar Por:</p>
                <select name="temperaments" onChange={e => handleChange(e.target.value)}>
                    <option value=""></option>
                    <option value="" disabled>--Temperaments--</option>
                    {
                        temperaments.length > 0 && temperaments.map(
                            temp => (
                                <option key={temp.id} value={temp.name}>{temp.name}</option>
                            )
                        )
                    }
                </select>
                <select name="filter" onChange={e => setFilter(e.target.value)} defaultValue>
                    <option value=""></option>
                    <option value="" disabled>--Existing breed of dog--</option>
                    <option value="api">API</option>
                    <option value="user">USER</option>
                </select>
            </form>
        </div>
    )

};

export default Filter;