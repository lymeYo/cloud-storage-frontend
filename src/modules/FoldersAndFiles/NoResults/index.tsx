import Image from "next/image"

import NoResultsImg from "@/assets/images/no-results.png"
import styles from "./style.module.css"

const NoResults = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={NoResultsImg.src} width={50} height={50} alt='ошибка' />
      <p className={styles.text}>Что-то пошло не так...</p>
    </div>
  )
}
export default NoResults
