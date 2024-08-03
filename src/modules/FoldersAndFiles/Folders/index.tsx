import FolderItem from "@/components/FolderItem"
import { useAppSelector } from "@/store/hooks"

import parentStyles from "../styles.module.css"
import styles from "./styles.module.css"
import { Tfolder } from "@/store/features/storage/utils"

interface Props {
  folders: Tfolder[]
}

const Folders = ({ folders }: Props) => {
  if (!folders.length) return <p className={parentStyles.info}>Нет созданных папок</p>

  return (
    <ul className={styles.grid}>
      {folders.map((folder) => (
        <li key={folder.name}>
          <FolderItem title={folder.name} storageId={folder.id} />
        </li>
      ))}
    </ul>
  )
}
export default Folders
