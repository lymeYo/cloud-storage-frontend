"use client"
import { FormEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import type { User } from "firebase/auth"

import { addDoc, collection } from "firebase/firestore"

import { auth, db } from "@/database/firebase"
import CloseSvg from "@/UI/Svgs/CloseSvg"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { TerrorMessagesValue, errorMessages } from "./utils"
import { closeAuthModal } from "@/store/features/ui/uiSlice"
import { setUserData } from "@/store/features/auth/authSlice"
import styles from "./styles.module.css"

type Tauth = "login" | "register"

const AuthModal = () => {
  const dispatch = useAppDispatch()

  const [type, setType] = useState<Tauth>("login")
  const [isError, setIsError] = useState(false)

  const dialogElRef = useRef<HTMLDialogElement>(null)
  const emailElRef = useRef<HTMLInputElement>(null)
  const passwordElRef = useRef<HTMLInputElement>(null)
  const errorMessage = useRef<TerrorMessagesValue>(errorMessages.default)

  const { isAuthModalOpen } = useAppSelector((store) => store.ui)

  const changeType = () => {
    setType((prev) => (prev == "login" ? "register" : "login"))
  }

  const close = () => {
    dispatch(closeAuthModal())
  }

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.currentTarget === event.target) close()
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const email = emailElRef.current?.value
    const password = passwordElRef.current?.value
    if (!email || !password) return

    if (type == "login") login(email, password)
    else register(email, password)
  }

  const errorHandler = (err: string) => {
    switch (err) {
      case "auth/email-already-in-use":
        errorMessage.current = errorMessages.emailAlreadyInUse
        break
      case "auth/invalid-credential":
        errorMessage.current = errorMessages.invalidLoginData
        break
      case "auth/invalid-email":
        errorMessage.current = errorMessages.invalidRegisterEmail
        break
      case "auth/weak-password":
        errorMessage.current = errorMessages.invalidRegisterPassword
        break
      default:
        errorMessage.current = errorMessages.default
    }

    setIsError(true)
  }

  const handleAuthSuccess = (user: User) => {
    if (emailElRef.current) emailElRef.current.value = ""
    if (passwordElRef.current) passwordElRef.current.value = ""

    setIsError(false)
    dispatch(setUserData({ uid: user.uid, email: user.email }))
    dispatch(closeAuthModal())
  }

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      handleAuthSuccess(userCredential.user)
    } catch (err: any) {
      console.error(err)
      errorHandler(err.code)
    }
  }

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      handleAuthSuccess(userCredential.user)
    } catch (err: any) {
      console.error(err)
      errorHandler(err.code)
    }
  }

  const handleInputsFocus = () => {
    setIsError(false)
  }

  useEffect(() => {
    if (!dialogElRef.current) return

    if (isAuthModalOpen) {
      dialogElRef.current.showModal()
      document.body.style.overflow = "hidden"
    } else {
      dialogElRef.current.close()
    }
  }, [isAuthModalOpen])

  useEffect(() => {
    const dialogEl = dialogElRef.current
    if (!dialogEl) return

    const closeListener = () => {
      document.body.style.overflow = ""
    }

    dialogEl.addEventListener("close", closeListener)

    return () => {
      dialogEl.removeEventListener("close", closeListener)
    }
  }, [])

  return (
    <dialog onClick={handleBackdropClick} className={styles.dialog} ref={dialogElRef}>
      <div className={styles.dialogContent}>
        <div className={styles.header}>
          <button onClick={changeType} className={styles.switcher}>
            {type == "login" ? "Зарегистрироваться" : "Войти в аккаунт"}
          </button>
          <button onClick={close} className={styles.close}>
            <CloseSvg />
          </button>
        </div>
        <form onSubmit={handleSubmit} className={styles.form} action=''>
          <input onFocus={handleInputsFocus} type='email' placeholder='Почта' ref={emailElRef} />
          <input onFocus={handleInputsFocus} type='text' placeholder='Пароль' ref={passwordElRef} />
          <button className={styles.submit} type='submit'>
            {type == "login" ? "Войти" : "Регистрация"}
          </button>
          {isError && <span className={styles.errorMess}>{errorMessage.current}</span>}
        </form>
      </div>
    </dialog>
  )
}
export default AuthModal
