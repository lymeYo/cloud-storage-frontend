import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type TconfirmModalOptions = {
  question: string
  accessCallback: () => void
  accessBtnText?: string
  denyCallback: () => void
  denyBtnText?: string
} | null

export type TconfirmModalType = "logout" | null

export interface UiState {
  isSideMenuOpen: boolean
  isAuthModalOpen: boolean
  confirmModalData: {
    isOpen: boolean
    type: TconfirmModalType
  }
}

const initialState: UiState = {
  isSideMenuOpen: false,
  isAuthModalOpen: false,
  confirmModalData: {
    isOpen: false,
    type: null
  }
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
    },
    openConfirmModal: (state, action: PayloadAction<TconfirmModalType>) => {
      state.confirmModalData.isOpen = true
      state.confirmModalData.type = action.payload
    },
    closeConfirmModal: (state) => {
      state.confirmModalData.isOpen = false
    }
  }
})

export const { openSideMenu, closeSideMenu, openAuthModal, closeAuthModal, openConfirmModal, closeConfirmModal } = uiSlice.actions

export default uiSlice.reducer
