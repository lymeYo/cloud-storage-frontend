import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/", credentials: "include" }),
  tagTypes: ["storage", "test", "user"],
  endpoints: () => ({}),
  
})
