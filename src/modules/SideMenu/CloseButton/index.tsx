import ExitArrowSvg from "@/UI/Svgs/ExitArrowSvg"
import { useAppDispatch } from "@/store/hooks"
import { closeSideMenu } from "@/store/features/ui/uiSlice"

import styles from "./styles.module.css"

const CloseButton = () => {
  const dispatch = useAppDispatch()

  const closeMenu = () => {
    dispatch(closeSideMenu())
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={closeMenu} className={styles.button} aria-label='close'>
        <ExitArrowSvg />
      </button>
    </div>
  )
}
export default CloseButton
