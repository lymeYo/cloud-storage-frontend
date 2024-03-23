import { usePathname, useRouter, useSearchParams } from "next/navigation"

import DashboardSvg from "@/UI/Svgs/DashboardSvg"
import FavoriteSvg from "@/UI/Svgs/FavoriteSvg"
import FoldersSvg from "@/UI/Svgs/FoldersSvg"
import RecycleBinSvg from "@/UI/Svgs/RecycleBinSvg"
import SettingsSvg from "@/UI/Svgs/SettingsSvg"
import MenuItem from "./MenuItem"

import styles from "./styles.module.css"

const MenuList = () => {
  const pathname = usePathname()
  const pathSegment = pathname.split("/")[1]

  return (
    <ul className={styles.list}>
      <li>
        <MenuItem title='Обзор' href='/' isActive={pathSegment == ""}>
          <DashboardSvg />
        </MenuItem>
      </li>
      <li>
        <MenuItem title='Избранное' href='/'>
          <FavoriteSvg />
        </MenuItem>
      </li>
      <li>
        <MenuItem title='Мои папки' href='/folders' isActive={pathSegment == "folders"}>
          <FoldersSvg />
        </MenuItem>
      </li>
      <li>
        <MenuItem title='Корзина' href='/'>
          <RecycleBinSvg />
        </MenuItem>
      </li>
      <li>
        <MenuItem title='Настройки' href='/'>
          <SettingsSvg />
        </MenuItem>
      </li>
    </ul>
  )
}
export default MenuList
