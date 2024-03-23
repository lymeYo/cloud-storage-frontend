import Image from "next/image"
import cx from "classnames"

import TextFileImg from "@/assets/images/FileTypes/Text.png"
import CrumbsMenu from "@/UI/CrumbsMenu"
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
  const uploadDateStr = new Date(file.uploadDate).toLocaleDateString("ru-Ru", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <div className={cx(fileItemStyles.row, styles.rowItem)}>
      <div className={styles.titleArea}>
        <Image src={TextFileImg.src} className={styles.fileTypeImg} width={35} height={35} alt='Файл с текстом' />
        <span className={styles.title}>{file.name}</span>
        <div className={styles.titleAreaMenu}>
          <CrumbsMenu options={options} />
        </div>
      </div>
      <span className={styles.size}>
        {bytesToKB(file.size)} KB<span className={fileItemStyles.bindingComma}>,</span>
      </span>
      <div className={styles.lastArea}>
        <span className={styles.date}>{uploadDateStr}</span>
        <div className={styles.lastAreaMenu}>
          <CrumbsMenu options={options} />
        </div>
      </div>
    </div>
  )
}
export default Item
