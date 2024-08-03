"use client"
import React, { MouseEvent, useEffect, useRef } from "react"

import styles from "./styles.module.css"

interface Props {
  children: React.ReactNode
  isOpen: boolean
  handleReduxClose: () => void
}

const DialogModal = ({ children, isOpen, handleReduxClose }: Props) => {
  const dialogElRef = useRef<HTMLDialogElement>(null)

  const showDocuemntScroll = () => (document.body.style.overflow = "")
  const hideDocuemntScroll = () => (document.body.style.overflow = "hidden")

  const firstUpdateRef = useRef(true)

  const close = () => {
    const dialogEl = dialogElRef.current
    if (!dialogEl) return

    // при первом рендере не нужны листенеры и класс closing
    if (firstUpdateRef.current) {
      firstUpdateRef.current = false
      return
    }

    // если диалог закрывается через escape, то функция close сработает после закрытия диалога
    // это поведение надо предотвратить
    if (!dialogEl.open) return

    const animationListener = () => {
      dialogEl.close()
      dialogEl.classList.remove(styles.closing)
    }

    dialogEl.addEventListener("animationend", animationListener, { once: true })
    dialogEl.classList.add(styles.closing)
  }

  const show = () => {
    hideDocuemntScroll()
    dialogElRef.current?.showModal()
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.currentTarget === event.target) handleReduxClose()
  }

  // если диалог закрылся за пределами этого компонента через redux,
  // то он реагирует на это и зыкрывает диалог
  useEffect(() => {
    if (isOpen) show()
    else close()
  }, [isOpen])

  useEffect(() => {
    const dialogEl = dialogElRef.current
    if (!dialogEl) return

    const closeListener = () => {
      handleReduxClose()
      showDocuemntScroll()
    }

    dialogEl.addEventListener("close", closeListener)
    return () => {
      dialogEl.removeEventListener("close", closeListener)
      firstUpdateRef.current = true
    }
  }, [])

  return (
    <dialog
      onClick={handleBackdropClick}
      className={styles.dialog}
      ref={dialogElRef}
    >
      <div className={styles.dialogContent}>{children}</div>
    </dialog>
  )
}
export default DialogModal
