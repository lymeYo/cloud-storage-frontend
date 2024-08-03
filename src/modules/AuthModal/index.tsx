"use client"
import { FormEvent, useEffect, useRef, useState } from "react"
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import type { SerializedError } from "@reduxjs/toolkit/react"

import CloseSvg from "@/UI/Svgs/CloseSvg"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { closeAuthModal } from "@/store/features/ui/uiSlice"
import { useLoginMutation, useRegistrationMutation } from "@/store/api/auth"
import { useProfileQuery } from "@/store/api/user"
import { type Tauth, getErrorMessByStatus } from "./utils"

import styles from "./styles.module.css"
import DialogModal from "@/UI/DialogModal"

const AuthModal = () => {
  const dispatch = useAppDispatch()

  const [type, setType] = useState<Tauth>("login")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const usernameElRef = useRef<HTMLInputElement>(null)
  const passwordElRef = useRef<HTMLInputElement>(null)

  const [loginMutation, { error: loginError, isSuccess: loginSuccess }] = useLoginMutation()
  const [registrationMutation, { data: registrationResponse, error: registrationError }] = useRegistrationMutation()
  const { data: profileResponse } = useProfileQuery(null, { skip: !loginSuccess })

  const { isAuthModalOpen } = useAppSelector((store) => store.ui)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const username = usernameElRef.current?.value
    const password = passwordElRef.current?.value
    if (!username || !password) return

    if (type == "login") login(username, password)
    else registration(username, password)
  }

  const handleAuthSuccess = () => {
    if (usernameElRef.current) usernameElRef.current.value = ""
    if (passwordElRef.current) passwordElRef.current.value = ""

    dispatch(closeAuthModal())
  }

  const handleInputFocus = () => {
    setErrorMessage(null)
  }

  const changeType = () => {
    setType((prev) => (prev == "login" ? "register" : "login"))
  }

  const closeListener = () => {
    dispatch(closeAuthModal())
  }

  const login = async (username: string, password: string) => {
    try {
      loginMutation({ username, password })
    } catch (err: any) {
      console.error(err)
    }
  }

  const registration = async (username: string, password: string) => {
    try {
      registrationMutation({ username, password })
    } catch (err: any) {
      console.error(err)
    }
  }

  //автоматический вход после регистрации
  useEffect(() => {
    if (registrationResponse) {
      login(registrationResponse.username, registrationResponse.password)
    }
  }, [registrationResponse])

  useEffect(() => {
    if (profileResponse) handleAuthSuccess()
  }, [profileResponse])

  //обработка ошибок
  useEffect(() => {
    let curError: FetchBaseQueryError | SerializedError | undefined
    if (type == "login") curError = loginError
    if (type == "register") curError = registrationError

    if (curError && "status" in curError && typeof curError.status === "number") {
      setErrorMessage(getErrorMessByStatus(curError.status, type))
    } else {
      setErrorMessage(null)
    }
  }, [loginError, registrationError, type])

  return (
    <DialogModal isOpen={isAuthModalOpen} handleReduxClose={closeListener}>
      <div className={styles.header}>
        <button onClick={changeType} className={styles.switcher}>
          {type == "login" ? "Зарегистрироваться" : "Войти в аккаунт"}
        </button>
        <button onClick={closeListener} className={styles.close}>
          <CloseSvg />
        </button>
      </div>
      <form onSubmit={handleSubmit} className={styles.form} action=''>
        <input onFocus={handleInputFocus} type='text' placeholder='Имя пользователя' ref={usernameElRef} />
        <input onFocus={handleInputFocus} type='text' placeholder='Пароль' ref={passwordElRef} />
        <button className={styles.submit} type='submit'>
          {type == "login" ? "Войти" : "Регистрация"}
        </button>
        {errorMessage && <span className={styles.errorMess}>{errorMessage}</span>}
      </form>
    </DialogModal>
  )
}
export default AuthModal
