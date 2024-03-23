import { createSlice } from "@reduxjs/toolkit"
import type { Action, PayloadAction } from "@reduxjs/toolkit"

import { useAppSelector } from "@/store/hooks"
import { Tuser } from "./utils"

export interface AuthState {
  isAuth: boolean
  userData: Tuser | null
}

const initialState: AuthState = {
  isAuth: false,
  userData: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUserData: (state, action: PayloadAction<Tuser>) => {
      state.userData = action.payload
      state.isAuth = true
    },
    logout: (state) => {
      state.userData = null
      state.isAuth = false
    }
  }
})

export const { setIsAuth, setUserData, logout } = authSlice.actions

export default authSlice.reducer
