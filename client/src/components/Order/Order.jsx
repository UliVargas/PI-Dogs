import styles from "./Order.module.css"

export function Order() {
  return (
      <div>
          <form action="" className={styles.formContainer}>
              <div className={styles.container}>
                  <p>Filtrar Por:</p>
                  <select name="" id="filtrar">
                      <option value="">
                          Ascendente
                      </option>
                      <option value="">
                          Descendente
                      </option>
                  </select>
              </div>
              <div className={styles.container}>
                  <p>Filtrar Por:</p>
                  <select name="" id="filtrar">
                      <option value="">
                          Ascendente
                      </option>
                      <option value="">
                          Descendente
                      </option>
                  </select>
              </div>
          </form>
      </div>
  )
};