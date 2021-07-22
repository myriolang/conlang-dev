import { createSlice } from "@reduxjs/toolkit"

export type UIState = {
  accountModalOpen: boolean
  languageModalOpen: boolean
  checkingAuth: boolean
  checkingLanguages: boolean
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    accountModalOpen: false,
    languageModalOpen: false,
    checkingAuth: false,
    checkingLanguages: false
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
    }),
    startCheckingLanguages: (state) => ({
      ...state,
      checkingLanguages: true
    }),
    stopCheckingLanguages: (state) => ({
      ...state,
      checkingLanguages: false
    })
  }
})

export const {
  openAccountModal,
  closeAccountModal,
  openLanguageModal,
  closeLanguageModal,
  startCheckingAuth,
  stopCheckingAuth,
  startCheckingLanguages,
  stopCheckingLanguages
} = uiSlice.actions
export default uiSlice.reducer
