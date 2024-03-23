import Link from "next/link"

import { useAppSelector } from "@/store/hooks"
import styles from "./styles.module.css"
import BackArrowSvg from "@/UI/Svgs/BackArrowSvg"

const Navigation = () => {
  const { currentPath } = useAppSelector((store) => store.storage)
  const prevPath = window.location.pathname.split("/").slice(0, -1).join("/")

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
