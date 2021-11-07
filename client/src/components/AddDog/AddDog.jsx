import React from "react";
import styles from "./AddDog.module.css";
import arrowBack from "../../img/arrow-left.svg";
import {Link} from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import Spinner from "../Spinner/Spinner"

const initialForm = {
    breedName: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife_span: "",
    maxLife_span: "",
    img: "",
    temperaments: "",
};

const AddDog = () => {

    const {form,
        fail,
        error,
        loading,
        response,
        handleBlur,
        handleSubmit,
        handleChange} = useForm(initialForm);


    return (
        <div className={styles.bgForm}>
            <div className={styles.container}>
            <Link to={"/home"}>
                <img src={arrowBack} alt=""/>
                Back
            </Link>
                <form onSubmit={handleSubmit} className={styles.formBox}>

                    <div className={styles.formContainer}>
                        <label htmlFor="breedName">Breed Name: </label>
                        <input type="text" value={form.breedName} name="breedName" id="breedName" onChange={handleChange} onBlur={handleBlur}
                            placeholder={"Breed Name"} />
                    </div>

                    <div className={styles.formContainer}>
                        <label htmlFor="minHeight">Min Height In CM: </label>
                        <input type="number" value={form.minHeight} name="minHeight" min="1" id="minHeight"
                            placeholder={"Min Height"} onChange={handleChange} onBlur={handleBlur} />
                    </div>

                   

                    <div className={styles.formContainer}>
                        <label htmlFor="maxHeight">Max Height In CM: </label>
                        <input type="number" value={form.maxHeight} name="maxHeight" min="1" id="maxHeight"
                            placeholder={"Max Height"} onChange={handleChange} onBlur={handleBlur} />
                    </div>

                    

                    <div className={styles.formContainer}>
                        <label htmlFor="minWeight">Min Weight In KG: </label>
                        <input type="number" value={form.minWeight} name="minWeight" id="minWeight" min="1"
                            placeholder={"Min Weight"} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    <div className={styles.formContainer}>
                        <label htmlFor="maxWeight">Max Weight In KG: </label>
                        <input type="number" value={form.maxWeight} name="maxWeight" id="maxWeight" min="1"
                            placeholder={"Max Weight"} onChange={handleChange} onBlur={handleBlur} />
                    </div>

                    <div className={styles.formContainer}>
                        <label htmlFor="minLife_span">Min Years Of Life: </label>
                        <input type="number" value={form.minLife_span} name="minLife_span" id="minLife_span" min="1"
                            placeholder={"Min Years Of Life"} onChange={handleChange} onBlur={handleBlur} />
                    </div>

                    <div className={styles.formContainer}>
                        <label htmlFor="maxLife_span">Max Years Of Life: </label>
                        <input type="number" value={form.maxLife_span} name="maxLife_span" id="maxLife_span" min="1"
                            placeholder={"Max Years Of Life"} onChange={handleChange} onBlur={handleBlur} />
                    </div>

                    <div className={styles.formContainer}>
                        <label htmlFor="image">Image: </label>
                        <input type="text" value={form.img} name="img" id="img" placeholder="Add The URL Of Your Image" onChange={handleChange} onBlur={handleBlur} />
                    </div>

                    <div className={styles.formContainer}>
                        <label htmlFor="temperaments">Temperaments: </label>
                        <input type="text" value={form.temperaments} name="temperaments" placeholder="Add Your Temperaments" onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    {loading && <Spinner/>}
                    {
                        fail ? (
                            <div className={styles.messageError}><p>{error}</p></div>
                        ) : (
                            response && <div className={styles.message}><h4>Your breed of dog has been created</h4></div>
                        )
                    }

                    <input type="submit" value="Add" className={styles.submitButton} />
                </form>
            </div>
        </div>
    )
}

export default AddDog;