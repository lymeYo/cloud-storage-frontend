import { collection, getDocs } from "firebase/firestore"

import { db } from "@/database/firebase"

export const getStoragePathFromFoldersPath = async (uid: string, foldersPath: string): Promise<string | null> => {
  let storagePath: string | null = null

  try {
    storagePath = uid + "/"
    const folderNames = foldersPath.split("/").filter((item) => Boolean(item))

    for (const indStr in folderNames) {
      const name = folderNames[indStr]

      const collectionRef = collection(db, storagePath)
      const docsData = await getDocs(collectionRef)
      const doc = docsData.docs.find((doc) => doc.data().name == name)
      if (!doc) throw new Error()

      storagePath += doc.id + "/items/"
    }
  } catch (err) {
    storagePath = null
  }

  return storagePath
}
