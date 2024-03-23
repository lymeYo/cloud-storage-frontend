import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyArrejZlLXoJa_pnl77dxS3XXfUynAWLdM",
  authDomain: "cloud-storage-b2abe.firebaseapp.com",
  projectId: "cloud-storage-b2abe",
  storageBucket: "cloud-storage-b2abe.appspot.com",
  messagingSenderId: "490483491424",
  appId: "1:490483491424:web:1eedf59d9edcfe101b9905",
  measurementId: "G-K15VV73DJF"
}

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)

export const db = getFirestore(app)

export const auth = getAuth(app)
// const analytics = getAnalytics(app)
