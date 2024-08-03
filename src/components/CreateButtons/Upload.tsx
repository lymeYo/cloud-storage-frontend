import { useRef } from "react"
import Image from "next/image"
import cx from "classnames"

import UploadImg from "@/assets/images/upload.png"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { openAuthModal } from "@/store/features/ui/uiSlice"
import { useUploadFilesMutation } from "@/store/api/storage"
import { useIsAuth } from "@/store/api/hooks"

import styles from "./styles.module.css"

const Upload = () => {
  const dispatch = useAppDispatch()

  const isAuth = useIsAuth()
  const inputRef = useRef<HTMLInputElement>(null)
  const { currentPath } = useAppSelector((store) => store.storage)
  const [uploadMutation] = useUploadFilesMutation()

  const uploadFile = async () => {
    if (!isAuth) {
      dispatch(openAuthModal())
      return
    }

    if (!inputRef.current) return
    const files = Array.from(inputRef.current.files || [])

    const formData = new FormData()
    files.forEach((file) => {
      formData.append("files", file)
    })
    formData.set("path", currentPath)

    uploadMutation(formData)
  }

  return (
    <label className={cx(styles.upload, styles.button)} htmlFor='upload-file-input'>
      <Image src={UploadImg.src} width={20} height={20} alt='Загрузить файлы' />
      <span>Загрузить</span>
      <input onChange={uploadFile} className={styles.fileInput} type='file' id='upload-file-input' multiple ref={inputRef} />
    </label>
  )
}
export default Upload
