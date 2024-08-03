import { TfileType } from "@/utils/file"
import { Tfile, Tfolder } from "../features/storage/utils"
import { Api } from "."

export type TcategoriesInfoRes = Record<TfileType, number>

export type TallFilesRes = Tfile[]
export type TallFilesBody = {
  limit?: number
  orderBy?: "DESC" | "ASC"
  orderType?: string
}

export type TchildrenFilesRes = Tfile[]
export type TchildrenFilesBody = {
  parentId?: number | null
  path?: string
}

export type TuploadFilesRes = Tfile
export type TuploadFilesBody = FormData

export type TchildrenFolderRes = Tfolder[]
export type TchildrenFolderBody = {
  parentId?: number | null
  path?: string
}

export type TallFoldersRes = Tfolder[]
export type TallFoldersBody = {
  limit?: number
  orderBy?: "DESC" | "ASC"
  orderType?: string
}

export type TcreateFolderRes = Tfolder
export type TcreateFolderBody = {
  limit?: number
  orderBy?: "DESC" | "ASC"
  orderType?: string
}

export type TstoragePlaceInfoRes = {
  total: number
  available: number
  engaged: number
}

export const storageApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    storagePlaceInfo: builder.query<TstoragePlaceInfoRes, void>({
      query: () => ({
        url: "storage/place",
        method: "GET"
      }),
      providesTags: [{ type: "storage", id: "files" }, "storage"]
    }),
    categoriesInfo: builder.query<TcategoriesInfoRes, void>({
      query: () => ({
        url: "storage/file/types",
        method: "GET"
      }),
      providesTags: [{ type: "storage", id: "files" }, "storage"]
    }),
    allFiles: builder.query<TallFilesRes, TallFilesBody | void>({
      query: (data) => ({
        url: `storage/file/all?limit=${data?.limit}&orderBy=${data?.orderBy}&orderType=${data?.orderType}`,
        method: "GET"
      }),
      providesTags: [{ type: "storage", id: "files" }, "storage"]
    }),
    childrenFiles: builder.query<TchildrenFilesRes, TchildrenFilesBody>({
      query: (data) => ({
        url: `storage/file/children?path=${data.path}&parentId=${data.parentId}`,
        method: "GET"
      }),
      providesTags: [{ type: "storage", id: "files" }, "storage"]
    }),
    uploadFiles: builder.mutation<TuploadFilesRes, TuploadFilesBody>({
      query: (formData) => ({
        url: "storage/file",
        method: "POST",
        body: formData
      }),
      invalidatesTags: [{ type: "storage", id: "files" }]
    }),
    allFolders: builder.query<TallFoldersRes, TallFoldersBody | void>({
      query: (data) => ({
        url: `storage/folder/all?limit=${data?.limit}&orderBy=${data?.orderBy}&orderType=${data?.orderType}`,
        method: "GET"
      }),
      providesTags: [{ type: "storage", id: "folders" }, "storage"]
    }),
    childrenFolders: builder.query<TchildrenFolderRes, TchildrenFolderBody>({
      query: (data) => ({
        url: `storage/folder/children?path=${data.path}&parentId=${data.parentId}`,
        method: "GET"
      }),
      providesTags: [{ type: "storage", id: "folders" }, "storage"]
    }),
    createFolder: builder.mutation<TcreateFolderRes, TcreateFolderBody>({
      query: (formData) => ({
        url: "storage/file",
        method: "POST",
        body: formData
      }),
      invalidatesTags: [{ type: "storage", id: "files" }]
    }),
    test: builder.query<number, any>({
      query: () => "storage/test",
      providesTags: ["test"]
    }),
    testing: builder.mutation<any, void>({
      query: () => ({
        url: "storage/test",
        method: "POST"
      }),
      invalidatesTags: ["test"]
    })
  })
})

export const {
  useCategoriesInfoQuery,
  useAllFilesQuery,
  useChildrenFilesQuery,
  useChildrenFoldersQuery,
  useUploadFilesMutation,
  useAllFoldersQuery,
  useTestQuery,
  useTestingMutation,
  useStoragePlaceInfoQuery
} = storageApi
