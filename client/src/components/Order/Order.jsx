import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortDogsAsc, sortDogsDesc } from "../../Redux/actions";
import styles from "./Order.module.css"

const Order = () => {

    const dispatch = useDispatch();
    const [sort, setSort] = useState("")
    const {breeds, loading} = useSelector(state => state)

    console.log(breeds)
    useEffect(() => {
      if(sort === "desc") {
          dispatch(sortDogsDesc())
      }
      if(sort === "asc") {
          dispatch(sortDogsAsc())
      }
    }, [sort, dispatch])

  return (
      <div>
          <form action="" className={styles.formContainer}>
              <div className={styles.container}>
                  <p>Filtrar Por:</p>
                  <select name="" id="filtrar" onChange={e => setSort(e.target.value)}>
                      <option value="asc">
                          Ascendente
                      </option>
                      <option value="desc">
                          Descendente
                      </option>
                  </select>
              </div>
          </form>
      </div>
  )
};

export default Order;