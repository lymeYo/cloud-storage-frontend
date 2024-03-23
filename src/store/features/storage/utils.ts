import { Timestamp } from "firebase/firestore"

export type Tfile = {
  name: string
  size: number //bytes
  storageUrl: string
  uploadDate: number
}

export type Tfolder = {
  name: string
  itemsCount: number
}
