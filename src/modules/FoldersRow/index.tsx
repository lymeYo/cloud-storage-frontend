"use client"

import FolderItem from "@/components/FolderItem"
import styles from "./styles.module.css"

const FoldersRow = () => {
  return (
    <ul className={styles.list}>
      <li>
        <FolderItem title='Портфолио' info='43 файла' />
      </li>
      <li>
        <FolderItem title='Картинки' info='112 файлов' />
      </li>
      <li>
        <FolderItem title='Временное' info='21 файл' />
      </li>
      <li>
        <FolderItem title='Доклады' info='7 файлов' />
      </li>
      <li>
        <FolderItem title='Покупки' info='0 файлов' />
      </li>
      <li>
        <FolderItem title='Планы' info='6 файла' />
      </li>
    </ul>
  )
}
export default FoldersRow
