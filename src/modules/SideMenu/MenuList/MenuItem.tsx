import { ReactNode } from "react"
import cx from "classnames"

import Link from "next/link"

import styles from "./styles.module.css"
import { useAppDispatch } from "@/store/hooks"
import { closeSideMenu } from "@/store/features/ui/uiSlice"

interface Props {
  title: string
  children: ReactNode
  isActive?: boolean
  href: string
}

const MenuItem = ({ title, href, isActive, children: svgImage }: Props) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(closeSideMenu())
  }

  return (
    <Link href={href} onClick={handleClick} className={cx(styles.item, isActive ? styles.active : null)}>
      <span className={styles.svgWrapper}>{svgImage}</span>
      <h4>{title}</h4>
    </Link>
  )
}
export default MenuItem
