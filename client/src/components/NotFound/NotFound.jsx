import React from "react";
import styles from "./NotFound.module.css"
import Err_404 from "../../img/NoHaySistema.png";
import {Link} from 'react-router-dom';

const NotFound = () => {

    return(
        <>
            <div className={styles.container}>
                    <div className={styles.img}>
                        <img src={Err_404} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h1>NO SYSTEM!</h1>
                        <p>Come back in an hour</p>
                        <Link to="/home">
                            Go To Home
                        </Link>
                    </div>
            </div>
        </>
    )
};

export default NotFound;