import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Api } from "."

export type TloginBody = {
  username: string
  password: string
}

export type TregistrationBody = TloginBody

//jwt token
export type TloginRes = {
  token: string
}

export type TregistrationRes = {
  id: number
  username: string
  password: string
}

export const authApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TloginRes, TloginBody>({
      query: (loginBody) => ({
        url: "auth/login",
        method: "POST",
        body: loginBody
      }),
      transformResponse: (response: any, meta, arg) => response,
      invalidatesTags: ["storage", "user"]
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST"
      }),
      invalidatesTags: ["storage", "user"]
    }),
    registration: builder.mutation<TregistrationRes, TregistrationBody>({
      query: (registrationBody) => ({
        url: "auth/registration",
        method: "POST",
        body: registrationBody
      }),
      transformResponse: (response: any, meta, arg) => response,
      invalidatesTags: ["storage", "user"]
    })
  })
})

export const { useLoginMutation, useLogoutMutation, useRegistrationMutation } = authApi
