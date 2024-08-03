import Image from "next/image"
import React, { KeyboardEvent, MouseEvent, useMemo, useState } from "react"

import Link from "next/link"

import FoldersSvg from "@/UI/Svgs/FoldersSvg"
import CardWrapper from "@/UI/Card/CardWrapper"

import styles from "./styles.module.css"
import { useAppSelector } from "@/store/hooks"
import { contextTypes } from "@/modules/ContextMenuWrapper/utils"

interface Props {
  title: string
  storageId: number
}

const FolderItem = ({ title, storageId }: Props) => {
  const { currentPath } = useAppSelector((state) => state.storage)

  // const keyDownHandler = (event: KeyboardEvent) => {
  //   const isKeyDownValid = event.code == "Space" && document.activeElement === event.currentTarget
  //   if (isKeyDownValid) {
  //     handleItem()
  //   }
  // }

  // const handleClick = (event: any) => {
  //   const muiOptionsSelector = ".MuiPaper-root"
  //   const menuWrapperSelector = "#" + menuItemId
  //   const menuClick = event.target.closest(menuWrapperSelector) || event.target.closest(muiOptionsSelector)
  //   if (menuClick) return

  //   handleItem()
  // }

  return (
    <Link href={"/folders" + currentPath + title}>
      <div className={styles.wrapper} data-context-id={storageId} data-context-type={contextTypes.folder}>
        <CardWrapper withButton>
          <div className={styles.cardContainer}>
            <div className={styles.header}>
              <div className={styles.folderSvgWrapper}>
                <FoldersSvg />
              </div>
            </div>
            <div className={styles.body}>
              <span className={styles.title}>{title}</span>
              <span className={styles.info}>info...</span>
            </div>
          </div>
        </CardWrapper>
      </div>
    </Link>
  )
}
export default FolderItem
