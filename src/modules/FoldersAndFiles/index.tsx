import { useAppSelector } from "@/store/hooks"
import SectionTitle from "@/UI/SectionTitle"
import Navigation from "./navigation"
import Folders from "./Folders"
import Files from "./Files"

import styles from "./styles.module.css"
import NoResults from "./NoResults"

const FoldersAndFiles = () => {
  const { isError } = useAppSelector((store) => store.storage)

  return (
    <div className={styles.wrapper}>
      <Navigation />
      {!isError ? (
        <>
          <section className={styles.section}>
            <SectionTitle text='Папки' />
            <Folders />
          </section>
          <section className={styles.section}>
            <SectionTitle text='Файлы' />
            <Files />
          </section>
        </>
      ) : (
        <NoResults />
      )}
    </div>
  )
}

export default FoldersAndFiles
