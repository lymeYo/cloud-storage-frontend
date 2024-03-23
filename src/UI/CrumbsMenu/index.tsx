import { MouseEvent, useEffect, useState } from "react"
import { IconButton, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import MenuItems from "./MenuItems"
import { Tcolors, Toption } from "./utils"

interface Props {
  options: Toption[]
}

const CrumbsMenu = ({ options }: Props) => {
  const [colors, setColors] = useState<Tcolors>({ text: "#fff", bg: "", hover: "" })
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isOpen = Boolean(anchorEl)

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement)
    const textClr = rootStyles.getPropertyValue("--text-clr")
    const bgClr = rootStyles.getPropertyValue("--main-dark-clr")
    const hoverClr = rootStyles.getPropertyValue("--main-hover-clr")

    setColors({ text: textClr, bg: bgClr, hover: hoverClr })
  }, [])

  return (
    <>
      <IconButton onClick={openMenu} aria-label='menu' aria-haspopup='true'>
        <MoreVertIcon sx={{ color: colors?.text }} />
      </IconButton>
      <Menu
        id='long-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={closeMenu}
        sx={{
          color: colors?.text,
          padding: 0,
          margin: 0,
          "& .MuiList-root, & .MuiPaper-root ": {
            backgroundColor: colors?.bg
          }
        }}
      >
        <MenuItems options={options} closeMenu={closeMenu} colors={colors} />
      </Menu>
    </>
  )
}
export default CrumbsMenu
