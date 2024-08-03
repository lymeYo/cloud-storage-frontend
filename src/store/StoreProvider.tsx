"use client"
import { ReactNode, useEffect, useRef } from "react"
import { Provider } from "react-redux"

import { AppStore, makeStore } from "./store"
import { userApi } from "./api/user"
import { openAuthModal } from "./features/ui/uiSlice"

interface Props {
  children: ReactNode
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) storeRef.current = makeStore()

  //авторизация при наличии токена после загрузки страницы
  useEffect(() => {
    const fetchUserData = async () => {
      if (!storeRef.current) return

      const { error } = await storeRef.current.dispatch(userApi.endpoints.profile.initiate())

      //проверка на то был ли токен на клиенте до этого или нет. Если был - 403 статус - показать окно авторизации
      if (error && "originalStatus" in error && error.originalStatus == 403) {
        storeRef.current.dispatch(openAuthModal())
      }
    }
    fetchUserData()
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
