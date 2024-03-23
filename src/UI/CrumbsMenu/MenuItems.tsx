import { MenuItem } from "@mui/material"

import { Tcolors, Toption } from "./utils"

interface Props {
  options: Toption[]
  closeMenu: () => void
  colors: Tcolors
}

const MenuItems = ({ options, closeMenu, colors }: Props) => {
  return options.map((option) => {
    const clickHandler = () => {
      closeMenu()
      option.callback()
    }

    return (
      <MenuItem
        onClick={clickHandler}
        sx={{ minHeight: 0, fontSize: "0.9rem", padding: "0.5rem 0.8rem", color: colors?.text, "&:hover": { backgroundColor: colors?.hover } }}
        key={option.label}
      >
        {option.label}
      </MenuItem>
    )
  })
}
export default MenuItems
