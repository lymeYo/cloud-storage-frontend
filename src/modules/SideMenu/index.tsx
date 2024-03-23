"use client"
import { MouseEvent, useEffect } from "react"
import Image from "next/image"
import cx from "classnames"

import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { closeSideMenu } from "@/store/features/ui/uiSlice"
import CloudImg from "@/assets/images/cloud.png"
import MenuList from "./MenuList"
import CloseButton from "./CloseButton"

import styles from "./styles.module.css"

const SideMenu = () => {
  const dispatch = useAppDispatch()
  const { isSideMenuOpen } = useAppSelector((store) => store.ui)

  const handleBackdropClick = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      dispatch(closeSideMenu())
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code == "Escape") dispatch(closeSideMenu())
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div onClick={handleBackdropClick} className={cx(styles.backdrop, isSideMenuOpen ? styles.open : null)} aria-hidden={!isSideMenuOpen}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Image src={CloudImg.src} width={80} height={80} alt='облако' priority={false} />
          <span className={styles.label}>Storage</span>
        </div>
        <MenuList />
        <CloseButton />
      </div>
    </div>
  )
}
export default SideMenu
