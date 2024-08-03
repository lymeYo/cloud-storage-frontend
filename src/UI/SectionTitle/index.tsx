import styles from "./styles.module.css"

interface Props {
  text: string
  showAllLink?: string
}

const SectionTitle = ({ text, showAllLink }: Props) => {
  return (
    <div className={styles.row}>
      <h3 className={styles.title}>{text}</h3>
      {showAllLink && (
        <a href={showAllLink} className={styles.showAll}>
          Показать все
        </a>
      )}
    </div>
  )
}
export default SectionTitle
