import Image from "next/image"
import cx from "classnames"

import TextFileImg from "@/assets/images/FileTypes/Text.png"
import fileItemStyles from "../fileItemStyles.module.css"

import styles from "./styles.module.css"
import { Tfile } from "@/store/features/storage/utils"
import { bytesToKB } from "@/utils/file"

const options = [
  {
    callback: () => {
      console.log("Удалить")
    },
    label: "Удалить"
  },
  {
    callback: () => {
      console.log("Переименовать")
    },
    label: "Переименовать"
  },
  {
    callback: () => {
      console.log("Переместить")
    },
    label: "Переместить"
  }
]

interface Props {
  file: Tfile
}

const Item = ({ file }: Props) => {
  const uploadDateStr = new Date(file.updatedAt).toLocaleDateString("ru-Ru", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const openContextMenu = () => {
    // TODO
    console.log("openContextMenu")
  }

  return (
    <button
      onClick={openContextMenu}
      className={cx(fileItemStyles.row, styles.rowItem)}
      data-context-click
      data-context-id={file.id}
      data-context-type='file'
    >
      <div className={styles.titleArea}>
        <Image src={TextFileImg.src} className={styles.fileTypeImg} width={35} height={35} alt='Файл с текстом' />
        <span className={styles.title}>{file.name}</span>
        {/* <div className={styles.titleAreaMenu}>
          <CrumbsMenu options={options} />
        </div> */}
      </div>
      <span className={styles.size}>
        {bytesToKB(file.size)} KB<span className={fileItemStyles.bindingComma}>,</span>
      </span>
      <div className={styles.lastArea}>
        <span className={styles.date}>{uploadDateStr}</span>
        {/*<div className={styles.lastAreaMenu}> <CrumbsMenu options={options} /> </div>*/}
      </div>
    </button>
  )
}
export default Item
