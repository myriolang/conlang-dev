import {
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import createWebStorage from "redux-persist/lib/storage/createWebStorage"

import authReducer from "./slices/auth"
import uiReducer from "./slices/ui"

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null)
    },
    setItem(_: unknown, value: unknown) {
      return Promise.resolve(value)
    },
    removeItem() {
      return Promise.resolve()
    }
  }
}

// persist config for all reducers
const persistConfig = {
  key: "root",
  storage:
    typeof window !== "undefined"
      ? createWebStorage("local")
      : createNoopStorage()
}

// extra config for auth
const authPersistConfig = {
  ...persistConfig,
  key: "auth",
  blacklist: ["authTime"]
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    ui: uiReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ]
    }
  })
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector
export const persistor = persistStore(store)
