"use client"

import Skeleton from "react-loading-skeleton"

import FolderItem from "@/components/FolderItem"
import { useAllFoldersQuery } from "@/store/api/storage"

import styles from "./styles.module.css"

const FoldersRow = () => {
  const { data, isLoading } = useAllFoldersQuery({ limit: 10, orderType: "DESC" })

  return (
    <ul className={styles.list}>
      {data ? (
        data.map((folder) => (
          <li key={folder.id}>
            <FolderItem title={folder.name} storageId={folder.id} />
          </li>
        ))
      ) : isLoading ? (
        <Skeleton count={3} containerClassName={styles.skeletonWrapper} className={styles.skeleton} />
      ) : null}
    </ul>
  )
}
export default FoldersRow
