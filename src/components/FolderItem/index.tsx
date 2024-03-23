import Image from "next/image"
import React, { KeyboardEvent, MouseEvent, useMemo, useState } from "react"

import Link from "next/link"

import FoldersSvg from "@/UI/Svgs/FoldersSvg"
import CardBody from "@/UI/Card/CardBody"
import CardWrapper from "@/UI/Card/CardWrapper"
import ItemMenu from "./ItemMenu"

import styles from "./styles.module.css"
import { useAppSelector } from "@/store/hooks"

interface Props {
  title: string
  itemsCount: number
}

const FolderItem = ({ title, itemsCount }: Props) => {
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
  const infoStr = useMemo(() => {
    if (itemsCount >= 11 && itemsCount <= 14) return itemsCount + " элементов"
    if (itemsCount % 10 == 1) return itemsCount + " элемент"
    if (itemsCount % 10 >= 2 && itemsCount % 10 <= 4) return itemsCount + " элемента"
    return itemsCount + " элементов"
  }, [itemsCount])

  const menuItemId = "directory-item-menu"

  return (
    <Link href={"/folders" + currentPath + title}>
      <div className={styles.wrapper} tabIndex={0}>
        <CardWrapper>
          <div className={styles.header}>
            <div className={styles.folderSvgWrapper}>
              <FoldersSvg />
            </div>
            <ItemMenu id={menuItemId} />
          </div>
          <CardBody title={title} info={infoStr} />
        </CardWrapper>
      </div>
    </Link>
  )
}
export default FolderItem
