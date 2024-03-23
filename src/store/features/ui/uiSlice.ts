import { createSlice } from "@reduxjs/toolkit"
import type { Action, PayloadAction } from "@reduxjs/toolkit"

import { useAppSelector } from "@/store/hooks"

export interface UiState {
  isSideMenuOpen: boolean
  isAuthModalOpen: boolean
}

const initialState: UiState = {
  isSideMenuOpen: false,
  isAuthModalOpen: false
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSideMenu: (state) => {
      state.isSideMenuOpen = true
    },
    closeSideMenu: (state) => {
      state.isSideMenuOpen = false
    },
    openAuthModal: (state) => {
      state.isAuthModalOpen = true
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false
    }
  }
})

export const { openSideMenu, closeSideMenu, openAuthModal, closeAuthModal } = uiSlice.actions

export default uiSlice.reducer
