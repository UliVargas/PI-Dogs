import styles from "./Pagination.module.css"


const Pagination = ({currentPage, setCurrentPage, totalDogs, dogPage}) => {

    const totalPages = Math.ceil(totalDogs / dogPage);

    let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

    return (
        <div>
            <ul className={styles.pagination}>
			<li className={`${styles.pageContainer} ${currentPage === 1 && `disabled`}`}>
				<button className="" onClick={() => setCurrentPage(currentPage - 1)}>
					&laquo;
				</button>
			</li>
			{pages.map((page) => (
				<li
					key={page}
					className={` ${page === currentPage && `active`}`}
					onClick={() => setCurrentPage(page)}
				>
					<button className="">{page}</button>
				</li>
			))}
			<li className={`page-item ${currentPage === totalPages && `disabled`}`}>
				<button className="" onClick={() => setCurrentPage(currentPage + 1)}>
					&raquo;
				</button>
			</li>
		</ul>
        </div>
    )
}

export default Pagination;