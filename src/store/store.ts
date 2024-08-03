import { configureStore } from "@reduxjs/toolkit"

import uiReducer from "./features/ui/uiSlice"
import authReducer from "./features/auth/authSlice"
import storageReducer from "./features/storage/storageSlice"
import { Api } from "./api"

const logoutMiddleware = (store) => (next) => (action) => {
  //очистка кэша при выходе из аккаунта
  if (action.meta?.arg?.endpointName === "logout") {
    store.dispatch(Api.util.resetApiState())
  }
  return next(action)
}

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      auth: authReducer,
      storage: storageReducer,
      [Api.reducerPath]: Api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([Api.middleware, logoutMiddleware])
  })

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
