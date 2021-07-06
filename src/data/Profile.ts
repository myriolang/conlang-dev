import api from "../utils/axios"

export interface IProfile {
  id: string
  username: string
  email: string
  displayName: string
  created: string
}

export interface IAuthenticationResponse {
  jwt: string
  profile: IProfile
}

export const Profile = {
  // Authenticate a profile
  // POST /api/auth
  authenticate: (
    username: string,
    password: string,
    callback: (
      error?: string,
      response?: IAuthenticationResponse
    ) => void
  ): void => {
    api
      .post("/api/auth", { username, password })
      .then((data) => {
        callback(undefined, {
          jwt: data.data.token,
          profile: data.data.profile
        } as IAuthenticationResponse)
      })
      .catch((err) => {
        if (err.response && err.response.status == 401) {
          callback(undefined, undefined)
        } else {
          callback(err)
        }
      })
  },
  validate: (jwt: string): Promise<void> =>
    new Promise<void>((resolve, reject) => {
      api
        .get("/api/auth", {
          headers: { Authorization: `Bearer ${jwt}` }
        })
        .then(() => resolve())
        .catch(() => reject())
    }),
  // Fetch a single profile
  // GET /api/profile
  get: (
    id: string,
    callback: (error?: string, profile?: IProfile) => void
  ): void => {
    callback("Not implemented")
  }
}
