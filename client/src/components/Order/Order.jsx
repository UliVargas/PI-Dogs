import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortDogsAsc, sortDogsDesc, sortDogsHigher, sortDogsLower } from "../../Redux/actions";
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
            <select
              name=""
              id="filtrar"
              defaultValue
              onChange={(e) => setSort(e.target.value)}
            >
                <option value="" selected>Order By</option>
              <optgroup label="Alphabetical">
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </optgroup>
              <optgroup label="Weight">
              <option value="low">Menor a Mayor</option>
              <option value="hig">Mayor a Menor</option>
              </optgroup>
            </select>
        </div>
      </form>
    </div>
  );
};

export default Order;
