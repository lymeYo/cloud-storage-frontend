import ExitSvg from "@/UI/Svgs/ExitSvg"
import { useAppDispatch } from "@/store/hooks"
import styles from "./styles.module.css"
import { openConfirmModal } from "@/store/features/ui/uiSlice"

const Auth = () => {
  const dispatch = useAppDispatch()

  const exitHandler = async () => {
    dispatch(openConfirmModal("logout"))
  }

  return (
    <button onClick={exitHandler} className={styles.wrapper} aria-label='exit'>
      <ExitSvg />
    </button>
  )
}
export default Auth
