import { useStoragePlaceInfoQuery } from "@/store/api/storage"
import { bytesToGB } from "@/utils/file"
import styles from "./styles.module.css"

const Info = () => {
  const { data } = useStoragePlaceInfoQuery()
  const totalStr = data ? bytesToGB(data.total) + "GB" : ""
  const availableStr = data ? bytesToGB(data.available) + "GB" : ""

  return (
    <div className={styles.info}>
      <div className={styles.block}>
        <span className={styles.label}>Места в хранилище</span>
        <span className={styles.value}>{totalStr}</span>
      </div>
      <div className={styles.block}>
        <span className={styles.label}>Доступного места</span>
        <span className={styles.value}>{availableStr}</span>
      </div>
    </div>
  )
}
export default Info
