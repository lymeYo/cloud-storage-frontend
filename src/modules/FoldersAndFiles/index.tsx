"use client"

import { useAppSelector } from "@/store/hooks"
import SectionTitle from "@/UI/SectionTitle"
import Navigation from "./navigation"
import Folders from "./Folders"
import Files from "./Files"
import NoResults from "./NoResults"
import { useChildrenFilesQuery, useChildrenFoldersQuery } from "@/store/api/storage"

import styles from "./styles.module.css"

const FoldersAndFiles = () => {
  const { currentPath } = useAppSelector((store) => store.storage)
  const { data: folders, error: foldersError } = useChildrenFoldersQuery({ path: currentPath })
  const { data: files, error: filesError } = useChildrenFilesQuery({ path: currentPath })

  const isError = filesError || foldersError
  return (
    <div className={styles.wrapper}>
      <Navigation />
      {!isError ? (
        <div className={styles.storageContent}>
          <section className={styles.section}>
            <SectionTitle text='Папки' />
            <Folders folders={folders || []} />
          </section>
          <section className={styles.section}>
            <SectionTitle text='Файлы' />
            <Files files={files || []} />
          </section>
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  )
}

export default FoldersAndFiles
