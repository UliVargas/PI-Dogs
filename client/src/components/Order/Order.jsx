import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortDogsAsc, sortDogsDesc, sortDogsHigher, sortDogsLower } from "../../Redux/actions";
import { SORT_DOGS_WEIGHT_UP } from "../../Redux/actions/types";
import styles from "./Order.module.css";

const Order = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const { breeds, loading } = useSelector((state) => state);

  useEffect(() => {
    if (sort === "desc") {
      dispatch(sortDogsDesc());
    }
    if (sort === "asc") {
      dispatch(sortDogsAsc());
    }
    if(sort === "hig") {
        dispatch(sortDogsHigher())
    }
    if(sort === "low") {
        dispatch(sortDogsLower())
    }
  }, [sort, dispatch]);

  return (
    <div>
      <form action="" className={styles.formContainer}>
        <div className={styles.container}>
          <p>Ordenar Por:</p>
            <select
              name=""
              id="filtrar"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="" selected></option>
              <option value="" disabled>--Alphabetical--</option>
              <option value="desc">Descendente</option>
              <option value="asc">Ascendente</option>
              <option value="" disabled>--Weight--</option>
              <option value="low">Menor a Mayor</option>
              <option value="hig">Mayor a Menor</option>
            </select>
        </div>
      </form>
    </div>
  );
};

export default Order;
