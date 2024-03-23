import { configureStore } from "@reduxjs/toolkit"

import uiReducer from "./features/ui/uiSlice"
import authReducer from "./features/auth/authSlice"
import storageReducer from "./features/storage/storageSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      auth: authReducer,
      storage: storageReducer
    }
  })

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
