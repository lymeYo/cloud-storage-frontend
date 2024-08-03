import Skeleton from "react-loading-skeleton"

import { Tfile } from "@/store/features/storage/utils"
import FileItem from "./FileItem"
import Labels from "./Labels"

import styles from "./styles.module.css"

interface Props {
  files?: Tfile[]
  isLoading: boolean
}

const FileList = ({ files, isLoading }: Props) => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Labels />
      </li>

      {files ? (
        files.map((file) => (
          <li className={styles.listItem} key={file.name}>
            <FileItem file={file} />
          </li>
        ))
      ) : isLoading ? (
        <Skeleton count={5} className={styles.skeleton} />
      ) : null}
    </ul>
  )
}
export default FileList
