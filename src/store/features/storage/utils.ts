import { Timestamp } from "firebase/firestore"

export type Tfile = {
  createdAt: string
  id: number
  name: string
  parentId: number | null
  path: string
  size: number //bytes
  type: string
  updatedAt: string
  userId: number
}

export type Tfolder = {
  id: number
  userId: number
  parentId: number | null
  name: string
  path: string
  createdAt: string
  updatedAt: string
}
