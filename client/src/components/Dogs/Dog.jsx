import React from "react";
import {Link} from "react-router-dom";
import styles from './Dog.module.css';

const Dog = ({name, img, temperaments, weight, id}) => {


    const splitWeight = weight.split(" ")

    return (
        <div className={styles.container}>
            <Link to={`/dog/${id}`}>
                <div className={styles.containerDog}>
                    <img src={img} alt={name} />
                    <div className={styles.details}>
                    <h4>{name}</h4>
                        <div className={styles.temperaments}>
                            <p>Temperaments</p>
                            <span>
                                <span>{temperaments}</span>
                            </span>
                        </div>
                        <div className={styles.weight}>
                            <p>Min Weight
                                <span> {splitWeight[0]} Kg</span>
                            </p>
                            <p>Max Weight
                                <span> {splitWeight[2]} Kg</span>
                            </p>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default Dog;
