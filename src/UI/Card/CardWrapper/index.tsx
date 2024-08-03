"use client"

import { MouseEvent, ReactNode } from "react"

import styles from "./styles.module.css"

interface Props {
  children: ReactNode
  withButton?: boolean
}

const BlockWrapper = ({ children, withButton }: Props) => {
  return <div className={`${styles.wrapper} ${withButton ? styles.withButton : ""}`}>{children}</div>
}
export default BlockWrapper
