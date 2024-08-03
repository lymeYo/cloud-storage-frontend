import Link from "next/link"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

import { useAppSelector } from "@/store/hooks"
import styles from "./styles.module.css"
import BackArrowSvg from "@/UI/Svgs/BackArrowSvg"

const Navigation = () => {
  const { currentPath } = useAppSelector((store) => store.storage)
  const pathname = usePathname()
  const prevPath = pathname.split("/").slice(0, -1).join("/")

  return (
    <div className={styles.wrapper}>
      <Link href={prevPath} className={styles.back}>
        <BackArrowSvg />
      </Link>
      <span className={styles.path}>{currentPath}</span>
    </div>
  )
}
export default Navigation
