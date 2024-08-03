import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

import { Tuser } from "./utils"

export interface AuthState {}

const initialState: AuthState = {}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // state.userData = null
      // state.isAuth = false
      console.log("logout!")
    }
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
