"use client"

import { useAppDispatch, useAppSelector } from "@/store/hooks"

import DialogModal from "@/UI/DialogModal"
import { closeConfirmModal } from "@/store/features/ui/uiSlice"
import { useGetOptionsByType } from "./utils"

import styles from "./styles.module.css"

const ActionsModal = () => {
  const dispatch = useAppDispatch()

  const { isOpen, type } = useAppSelector((store) => store.ui.confirmModalData)
  const [question, action] = useGetOptionsByType(type)

  const close = () => {
    dispatch(closeConfirmModal())
  }

  const handleAccess = () => {
    action()
    close()
  }

  const handleDeny = () => {
    close()
  }

  return (
    <DialogModal handleReduxClose={close} isOpen={isOpen}>
      <div>
        <p className={styles.question}>{question}</p>
        <div className={styles.buttons}>
          <button onClick={handleDeny} className={styles.denyBtn}>
            Нет
          </button>
          <button onClick={handleAccess} className={styles.accessBtn}>
            Да
          </button>
        </div>
      </div>
    </DialogModal>
  )
}
export default ActionsModal
