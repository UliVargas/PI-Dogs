import spinner from './spinner.png'
import styles from './Spinner.module.css'
export function Spinner() {
    return (
        <div className={styles.spinner}>
            <img src={spinner} className={styles.spinnig} alt={"Loading"}/>
        </div>
    )
}