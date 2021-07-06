import { createSlice } from "@reduxjs/toolkit"

export type UIState = {
  accountModalOpen: boolean
  languageModalOpen: boolean
  checkingAuth: boolean
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    accountModalOpen: false,
    languageModalOpen: false,
    checkingAuth: false
  } as UIState,
  reducers: {
    openAccountModal: (state) => ({
      ...state,
      accountModalOpen: true
    }),
    closeAccountModal: (state) => ({
      ...state,
      accountModalOpen: false
    }),
    openLanguageModal: (state) => ({
      ...state,
      languageModalOpen: true
    }),
    closeLanguageModal: (state) => ({
      ...state,
      languageModalOpen: false
    }),
    startCheckingAuth: (state) => ({
      ...state,
      checkingAuth: true
    }),
    stopCheckingAuth: (state) => ({
      ...state,
      checkingAuth: false
    })
  }
})

export const {
  openAccountModal,
  closeAccountModal,
  openLanguageModal,
  closeLanguageModal,
  startCheckingAuth,
  stopCheckingAuth
} = uiSlice.actions
export default uiSlice.reducer
