import { signOut } from "firebase/auth"

import ExitSvg from "@/UI/Svgs/ExitSvg"
import { useAppDispatch } from "@/store/hooks"
import { logout } from "@/store/features/auth/authSlice"
import { auth } from "@/database/firebase"
import styles from "./styles.module.css"

const Auth = () => {
  const dispatch = useAppDispatch()

  const exitHandler = async () => {
    try {
      await signOut(auth)
      dispatch(logout())
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <button onClick={exitHandler} className={styles.wrapper} aria-label='exit'>
      <ExitSvg />
    </button>
  )
}
export default Auth
