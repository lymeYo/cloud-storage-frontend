"use client"
import { useEffect } from "react"

import CreateButtons from "@/components/CreateButtons"
import HeaderLayout from "@/layouts/HeaderLayout"
import FoldersAndFiles from "@/modules/FoldersAndFiles"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import {
  setPath
} from "@/store/features/storage/storageSlice"

import styles from "./styles.module.css"

interface Props {
  params: {
    path: string[]
  }
}

export default function Page({ params }: Props) {
  const dispatch = useAppDispatch()
  const joinedPath = params.path?.join("/") || null
  const storagePath = joinedPath ? `/${decodeURI(joinedPath)}/` : "/"

  // const { currentPath } = useAppSelector((store) => store.storage)
  // const { userData } = useAppSelector((store) => store.auth)

  // useEffect(() => {
  //   dispatch(fetchStorageData(storagePath))
  // }, [storagePath, userData])
  // // обновляются данные, когда меняется путь и данные пользователя (ибо авторизация происходит после рендера страницы)
  // // использую storagePath вместо currentPath, т.к. currentPath меняется не сразу и в стор попадает старое значение

  useEffect(() => {
    dispatch(setPath(storagePath))
  }, [storagePath])

  return (
    <HeaderLayout>
      {/* <div className={styles.createButtonsDesktop}>
         <CreateButtons />
       </div> */}
      <main>
        <FoldersAndFiles />
      </main>
    </HeaderLayout>
  )
}
