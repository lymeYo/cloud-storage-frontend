import styles from "./styles.module.css"

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.block}>
        <span className={styles.label}>Места в хранилище</span>
        <span className={styles.value}>10GB</span>
      </div>
      <div className={styles.block}>
        <span className={styles.label}>Доступного места</span>
        <span className={styles.value}>8.97GB</span>
      </div>
    </div>
  )
}
export default Info
