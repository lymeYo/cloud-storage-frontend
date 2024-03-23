import fileItemStyles from "../fileItemStyles.module.css"
import styles from "./styles.module.css"

const labelsInfo = ["Название", "Размер", "Дата обновления"]

const Labels = () => {
  return (
    <div className={fileItemStyles.row}>
      {labelsInfo.map((label, ind) => (
        <span className={styles.label} key={label}>
          {label}
          {ind == 1 && <span className={fileItemStyles.bindingComma}>, </span>}
        </span>
      ))}
    </div>
  )
}
export default Labels
