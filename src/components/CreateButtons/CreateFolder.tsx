import Image from "next/image"
import cx from "classnames"

import PlusImg from "@/assets/images/plus.png"

import styles from "./styles.module.css"

const CreateFolder = () => {
  return (
    <button className={cx(styles.create, styles.button)}>
      <Image src={PlusImg.src} width={20} height={20} alt='Создать папку' />
      <span>Создать</span>
    </button>
  )
}
export default CreateFolder
