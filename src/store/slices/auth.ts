import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProfile } from "../../data/Profile"

export type AuthState = {
  authenticated: boolean
  jwt?: string
  profile?: IProfile
}

export type LoginPayload = {
  jwt: string
  profile: IProfile
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false
  } as AuthState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => ({
      authenticated: true,
      jwt: action.payload.jwt,
      profile: action.payload.profile
    }),
    logout: () => ({ authenticated: false })
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
