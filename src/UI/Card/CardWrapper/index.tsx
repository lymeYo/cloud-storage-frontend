"use client"

import { MouseEvent, ReactNode } from "react"

import styles from "./styles.module.css"

interface Props {
  children: ReactNode
}

const BlockWrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>
}
export default BlockWrapper
