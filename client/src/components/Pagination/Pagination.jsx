import styles from "./Paginate.module.css"

  export const Pagination = ({totalBreeds, setCurrentPage, itemsPerPage, maxPageNumberLimit, minPageNumberLimit, currentPage, setmaxPageNumberLimit, setminPageNumberLimit, pageNumberLimit}) => {

    const handleClick = (event) => {
      setCurrentPage(Number(event.target.id));
    };


    const pages = [];
    for (let i = 1; i <= Math.ceil(totalBreeds / itemsPerPage); i++) {
      pages.push(i);
    }

    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage === number ? styles.active : styles.hover}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });

    const handleNextbtn = () => {
      setCurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };

    const handlePrevbtn = () => {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

    return (
      <>
        <div className={styles.container}>
          <ul className={styles.pageNumbers}>
            <li>
              <button
                  onClick={handlePrevbtn}
                  disabled={currentPage === pages[0] ? true : false}
              >
                Prev
              </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
            <li>
              <button
                  onClick={handleNextbtn}
                  disabled={currentPage === pages[pages.length - 1] ? true : false}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  };

  export default Pagination;
