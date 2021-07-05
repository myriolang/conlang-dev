import { createSlice } from "@reduxjs/toolkit"

export type UIState = {
  accountModalOpen: boolean
  languageModalOpen: boolean
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    accountModalOpen: false,
    languageModalOpen: false
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
    })
  }
})

export const {
  openAccountModal,
  closeAccountModal,
  openLanguageModal,
  closeLanguageModal
} = uiSlice.actions
export default uiSlice.reducer
