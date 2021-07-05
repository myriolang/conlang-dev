import api from "../utils/axios"

export interface ILanguage {
  id: string
  profileId: string
  name: string
  slug: string
  nativeName: string
  description: string
  tags: string[]
}

export const Language = {
  getAllCurrentUser: (jwt: string): Promise<ILanguage[]> =>
    new Promise((resolve, reject) => {
      api
        .get("/api/language", {
          headers: { Authorization: `Bearer ${jwt}` }
        })
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
}
