import styles from './Spinner.module.css'


const Spinner = () => {
    return (
        // <div className={styles.spinner}>
        //     <img src={spinner} className={styles.spinnig} alt={"Loading"}/>
        // </div>
        <div className={styles.container}>
            <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;