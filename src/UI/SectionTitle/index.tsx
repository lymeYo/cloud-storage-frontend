import styles from "./styles.module.css"

interface Props {
  text: string
  withShowAllBtn?: boolean
}

const SectionTitle = ({ text, withShowAllBtn }: Props) => {
  return (
    <div className={styles.row}>
      <h3 className={styles.title}>{text}</h3>
      {withShowAllBtn && (
        <a href='#' className={styles.showAll}>
          Показать все
        </a>
      )}
    </div>
  )
}
export default SectionTitle
