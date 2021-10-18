import styles from "./Pagination.module.css"


const Pagination = ({dogsPerPage, totalDogs, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className={styles.pagination}>
                <div className={styles.pageContainer}>
                    {
                        pageNumbers.map(number => (
                            <li key={number} className={styles.page}>
                                <button onClick={() => paginate(number)} className={styles.pageLink}>
                                    {number}
                                </button>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </div>
    )
}

export default Pagination;