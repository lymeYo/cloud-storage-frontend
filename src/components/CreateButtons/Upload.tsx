import { useRef } from "react"
import Image from "next/image"
import cx from "classnames"
import { getMetadata, ref, uploadBytes } from "firebase/storage"

import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"

import UploadImg from "@/assets/images/upload.png"
import { db, storage } from "@/database/firebase"
import styles from "./styles.module.css"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { openAuthModal } from "@/store/features/ui/uiSlice"

const Upload = () => {
  const dispatch = useAppDispatch()

  const inputRef = useRef<HTMLInputElement>(null)
  const { isAuth, userData } = useAppSelector((store) => store.auth)
  // useEffect(() => {
  //   const imageRef = ref(storage, "logo-s.png")
  //   getDownloadURL(imageRef).then((imageUrl) => {
  //     console.log(imageUrl);
  //   })
  // }, [])

  // if (userData?.uid) getMetadata(ref(storage, `RafinNa7L8QSp7tFbM9dtJ5nWf72/6055453195.webp`)).then(console.log)

  const uploadFile = async () => {
    if (!isAuth || !userData) {
      dispatch(openAuthModal())
      return
    }

    const files = Array.from(inputRef.current?.files || [])
    if (!files.length) return

    const collectionRef = collection(db, userData.uid)
    files.forEach(async (file) => {
      const filePath = `${userData.uid}/${file.name}`
      await addDoc(collectionRef, {
        type: "file",
        name: file.name,
        size: file.size,
        url: filePath,
        uploadDate: Timestamp.now().seconds * 1000
      })
      const fileRef = ref(storage, filePath)
      await uploadBytes(fileRef, file)
    })
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
