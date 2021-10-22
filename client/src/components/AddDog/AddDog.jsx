import styles from "./AddDog.module.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import axios from 'axios'

const AddDog = () => {

    const [form, setForm] = useState({
    "breedName": "",
    "minHeight": "",
    "maxHeight": "",
    "minWeight": "",
    "maxWeight": "",
    "minLife_span": "",
    "maxLife_span": "",
    "temperaments": "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let resp = await axios.post('http://localhost:3001/dog', form);
        return resp.data
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={styles.formContainer}>
                    <label htmlFor="name">Breed Name: </label>
                    <input type="text" name="breed" id="name" onChange={handleChange}/>
                </div>

                <div className={styles.formContainer}>
                    <label htmlFor="height">Min Height in CM: </label>
                    <input type="number" name="minHeight" id="height" onChange={handleChange}/>
                </div>

                <div className={styles.formContainer}>
                    <label htmlFor="height">Max Height in CM: </label>
                    <input type="number" name="maxHeight" id="height" onChange={handleChange}/>
                </div>

                <div className={styles.formContainer}>
                    <label htmlFor="weight">Min Weight in KG: </label>
                    <input type="number" name="minWeight" id="weight" onChange={handleChange}/>
                </div>

                <div className={styles.formContainer}>
                    <label htmlFor="weight">Max Weight in KG: </label>
                    <input type="number" name="maxWeight" id="weight" onChange={handleChange}/>
                </div>

                <div className={styles.formContainer}>
                    <label htmlFor="minLife_span">Min Years of life: </label>
                    <input type="number" name="minLife_span" id="life_span" onChange={handleChange}/>
                </div>

                <div className={styles.formContainer}>
                    <label htmlFor="maxLife_span">Max Years of life: </label>
                    <input type="number" name="maxLife_span" id="life_span" onChange={handleChange}/>
                </div>

                <div className={styles.formContainer}>
                    <label htmlFor="temperaments">Temperaments: </label>
                    <input type="text" name="temperaments" id="temperaments" onChange={handleChange}/>
                </div>

                <input type="submit"/>

            </form>
        </div>
    )
}

export default AddDog;