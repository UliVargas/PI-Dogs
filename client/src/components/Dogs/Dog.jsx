import {Link} from "react-router-dom";
import styles from './Dog.module.css';

const Dog = ({name, img, temperaments, weight, id}) => {
    console.log(temperaments)


    return (
        <div className={styles.container}>
            <Link to={`/dog/${id}`}>
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <ul className={styles.details}>
                    <li>
                        {temperaments}
                    </li>
                    <li>
                        {weight} Weight
                    </li>
                </ul>
            </Link>
        </div>
    )
}

export default Dog;