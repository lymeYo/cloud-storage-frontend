import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Timestamp, collection, getCountFromServer, getDocs } from "firebase/firestore"

import { Tfile, Tfolder } from "./utils"
import { RootState } from "@/store/store"
import { db } from "@/database/firebase"
import { getStoragePathFromFoldersPath } from "@/utils/firebase"

export const fetchStorageData = createAsyncThunk<StorageState["data"], any, { state: RootState }>(
  "storege/fetchData",
  async (foldersPath, thunkApi) => {
    const isAuth = thunkApi.getState().auth.isAuth
    const uid = thunkApi.getState().auth.userData?.uid

    if (!isAuth || !uid) throw new Error()

    const storagePath = await getStoragePathFromFoldersPath(uid, foldersPath)

    if (!storagePath) throw new Error()

    const collectionRef = collection(db, storagePath)

    const docsData = await getDocs(collectionRef)

    const files: Tfile[] = []
    const folders: Tfolder[] = []

    for (const doc of docsData.docs) {
      const data = doc.data()

      if (data.type == "file") {
        files.push({ name: data.name, storageUrl: data.url, size: data.size, uploadDate: data.uploadDate })
      } else if (data.type == "folder") {
        const itemsCollectionRef = collection(db, doc.ref.path + "/items")
        const snapshot = await getCountFromServer(itemsCollectionRef)
        const itemsCount = snapshot.data().count

        folders.push({ name: data.name, itemsCount })
      }
    }

    return { files, folders, currentPath: foldersPath }
  }
)

export interface StorageState {
  data: {
    files: Tfile[]
    folders: Tfolder[]
  } | null
  isError: boolean
  currentPath: string
}

const initialState: StorageState = {
  data: null,
  isError: false,
  currentPath: "/"
}

export const storageSlice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    backwardPath: (state) => {
      const index = state.currentPath.lastIndexOf("/")
      state.currentPath = state.currentPath.slice(0, index)
    },
    setPath: (state, action: PayloadAction<string>) => {
      state.currentPath = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStorageData.fulfilled, (state, action: PayloadAction<StorageState["data"]>) => {
      state.data = action.payload
      console.log("action.payload", state.currentPath, action.payload)

      state.isError = false
    })
    builder.addCase(fetchStorageData.rejected, (state, action) => {
      console.log("fetchStorageData.rejected")
      state.data = null
      state.isError = true
    })
  }
})

export const { backwardPath, setPath } = storageSlice.actions

export default storageSlice.reducer
