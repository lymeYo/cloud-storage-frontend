import styles from "./styles.module.css"

interface Props {
  title: string
  info: string
}

const Body = ({ title, info }: Props) => {
  return (
    <div className={styles.body}>
      <span className={styles.title}>{title}</span>
      <span className={styles.info}>{info}</span>
    </div>
  )
}
export default Body