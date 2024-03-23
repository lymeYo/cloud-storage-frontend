import ProfileSvg from "@/UI/Svgs/ProfileSvg"

import styles from "./styles.module.css"
import { useAppDispatch } from "@/store/hooks"
import { openAuthModal } from "@/store/features/ui/uiSlice"

const Unauth = () => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(openAuthModal())
  }

  return (
    <button onClick={handleClick} className={styles.wrapper}>
      <ProfileSvg />
    </button>
  )
}
export default Unauth
