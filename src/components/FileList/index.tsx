import { Tfile } from "@/store/features/storage/utils"
import FileItem from "./FileItem"
import Labels from "./Labels"
import styles from "./styles.module.css"
import { Timestamp } from "firebase/firestore"

interface Props {
  files: Tfile[]
}

const FileList = ({ files }: Props) => {
  return (
    <ul className={styles.list}>
      <li>
        <Labels />
      </li>
      {files.map((file) => (
        <li key={file.name}>
          <FileItem file={file} />
        </li>
      ))}
    </ul>
  )
}
export default FileList
