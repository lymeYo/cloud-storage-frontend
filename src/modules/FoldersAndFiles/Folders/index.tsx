import FolderItem from "@/components/FolderItem"
import { useAppSelector } from "@/store/hooks"

import parentStyles from "../styles.module.css"
import styles from "./styles.module.css"

const Folders = () => {
  const storage = useAppSelector((store) => store.storage)
  const folders = storage.data?.folders ?? []

  if (!folders.length) return <p className={parentStyles.info}>Нет созданных папок</p>

  return (
    <ul className={styles.grid}>
      {folders.map((folder) => (
        <li key={folder.name}>
          <FolderItem title={folder.name} itemsCount={folder.itemsCount} />
        </li>
      ))}
    </ul>
  )
}
export default Folders
