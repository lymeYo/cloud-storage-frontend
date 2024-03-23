"use client"
import { ReactNode, useEffect, useRef } from "react"
import { Provider } from "react-redux"

import { onAuthStateChanged } from "firebase/auth"

import { AppStore, makeStore } from "./store"
import { auth } from "@/database/firebase"
import { useAppDispatch } from "./hooks"
import { setUserData } from "./features/auth/authSlice"
import { fetchStorageData } from "./features/storage/storageSlice"

// import { initializeCount } from "../lib/features/counter/counterSlice"

interface Props {
  children: ReactNode
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && storeRef.current) {
        storeRef.current.dispatch(setUserData({ uid: currentUser.uid, email: currentUser.email }))
        // storeRef.current.dispatch(fetchStorageData(...))
      }
    })
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}
