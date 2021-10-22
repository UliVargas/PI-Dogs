import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchTemperaments, filterByTemperament} from "../../Redux/actions";

const Filter = () => {

    const dispatch = useDispatch();
    const {temperaments} = useSelector(state => state);


    useEffect( () => {
        dispatch(fetchTemperaments())
    },[dispatch])

    const handleChange = async(temps) => {
        await dispatch(filterByTemperament(temps.toLowerCase()))
    }


    return (
        <div>
            <form >
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
            </form>
        </div>
    )

};

export default Filter;