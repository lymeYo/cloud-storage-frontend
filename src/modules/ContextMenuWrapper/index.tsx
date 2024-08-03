"use client"

import { ReactNode, useEffect, useRef } from "react"

import { contextTypes, options } from "./utils"

import styles from "./style.module.css"

interface Props {
  children: ReactNode
}

const contextMenuId = "context-menu"

const ContextMenuWrapper = ({ children }: Props) => {
  const menuWrapperRef = useRef<HTMLDialogElement>(null)

  const closeMenu = () => {
    const menuWrapperEl = menuWrapperRef.current
    if (!menuWrapperEl) return

    menuWrapperEl.style.left = "-100%"
    menuWrapperEl.close()
  }

  const openMenu = (event: MouseEvent, elemId: string) => {
    event.preventDefault()
    const menuWrapperEl = menuWrapperRef.current
    if (!menuWrapperEl) return

    const isMouseClick = event.detail != 0 //нажатие либо мышкой, либо клавиатурой
    console.log("Изменение элемента с id: ", elemId)

    let xWindowCord, yWindowCord
    let xDocumentCord, yDocumentCord

    if (isMouseClick) {
      xWindowCord = event.clientX
      yWindowCord = event.clientY

      xDocumentCord = event.pageX
      yDocumentCord = event.pageY
    } else {
      const target = event.target as HTMLElement
      const clientRect = target.getBoundingClientRect()
      xWindowCord = clientRect.left
      yWindowCord = clientRect.top

      const bodyRect = document.body.getBoundingClientRect()
      xDocumentCord = clientRect.left - bodyRect.left
      yDocumentCord = clientRect.top - bodyRect.top
    }

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const xMargin = 10

    const isRightHalfClick = xWindowCord > windowWidth / 2
    const isTopHalfClick = yWindowCord < windowHeight / 2

    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    )

    const scrollWidth = document.body.scrollWidth

    if (isRightHalfClick) {
      // разместить меню слева от курсора
      menuWrapperEl.style.left = ""
      menuWrapperEl.style.right = scrollWidth - xDocumentCord + xMargin + "px"
    } else {
      // разместить меню справа от курсора
      menuWrapperEl.style.left = xDocumentCord + xMargin + "px"
      menuWrapperEl.style.right = ""
    }

    if (isTopHalfClick) {
      // разместить меню сверху от курсора
      menuWrapperEl.style.top = yDocumentCord + "px"
      menuWrapperEl.style.bottom = ""
    } else {
      // разместить меню снизу от курсора
      menuWrapperEl.style.bottom = scrollHeight - yDocumentCord + "px"
      menuWrapperEl.style.top = ""
    }

    menuWrapperEl.show()
  }

  const handleOpenMenu = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    const elemCtxType = target.closest("[data-context-type]")?.getAttribute("data-context-type")
    const elemId = target.closest("[data-context-id]")?.getAttribute("data-context-id")

    if (elemId && elemCtxType == contextTypes.folder)
      openMenu(event, elemId) //todo меню для папок
    else if (elemId && elemCtxType == contextTypes.file)
      openMenu(event, elemId) //todo меню для файлов
    else closeMenu()
  }

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement

    const isHandleClickAsContextmenu = target.closest("[data-context-click]")
    if (isHandleClickAsContextmenu) {
      handleOpenMenu(event)
      return
    }

    //произошел ли клик по меню или элементу для которого меню вызывается
    const isClickNeedful = target.closest("[data-context-type]") || target.closest("#" + contextMenuId)
    if (!isClickNeedful) closeMenu()
  }

  useEffect(() => {
    document.addEventListener("contextmenu", handleOpenMenu)
    document.addEventListener("click", handleClick)
    window.addEventListener("scroll", closeMenu)

    return () => {
      document.removeEventListener("contextmenu", handleOpenMenu)
      document.removeEventListener("click", handleClick)
      window.removeEventListener("scroll", closeMenu)
    }
  }, [])

  return (
    <>
      {children}
      <dialog className={styles.dialog} ref={menuWrapperRef} id={contextMenuId}>
        <ul className={styles.list}>
          {options.map((opt, ind) => (
            <li key={ind}>
              <button onClick={opt.callback} className={styles.listItem}>
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  )
}
export default ContextMenuWrapper
