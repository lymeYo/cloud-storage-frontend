import Image from "next/image"

import SearchImg from "../../assets/images/search.png"
import styles from "./styles.module.css"

const Search = () => {
  return (
    <div className={styles.searchArea}>
      <div className={styles.searchRow}>
        <button className={styles.searchBtn} aria-label="search">
          <Image src={SearchImg.src} alt='search' width={25} height={25} />
        </button>
        <input className={styles.search} type='text' placeholder='Поиск...' />
      </div>
    </div>
  )
}
export default Search
