import MenuSvg from "@/UI/Svgs/MenuSvg"
import { useAppDispatch } from "@/store/hooks"
import { openSideMenu } from "@/store/features/ui/uiSlice"

import styles from "./styles.module.css"

const MenuButton = () => {
  const dispatch = useAppDispatch()

  const openMenu = () => {
    dispatch(openSideMenu())
  }

  return (
    <button onClick={openMenu} className={styles.menuBtn} aria-label='menu'>
      <MenuSvg />
    </button>
  )
}
export default MenuButton
