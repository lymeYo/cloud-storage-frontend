import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Api } from "."

export type TprofileBody = {
  id: number
  username: string
  password: string
}

export const userApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<TprofileBody, void | null>({
      query: () => ({
        url: "user/profile",
        method: "GET"
      }),
      providesTags: ["user"]
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyProfileQuery, useProfileQuery } = userApi
