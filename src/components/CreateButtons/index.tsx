"use client"

import CreateFolder from "./CreateFolder"
import Upload from "./Upload"

import styles from "./styles.module.css"

const CreateButtons = () => {
  return (
    <div className={styles.wrapper}>
      <Upload />
      <CreateFolder />
    </div>
  )
}
export default CreateButtons
