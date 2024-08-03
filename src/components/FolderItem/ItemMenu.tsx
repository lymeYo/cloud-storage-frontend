// import React, { MouseEvent, SyntheticEvent, useEffect, useState } from "react"
// import MoreVertIcon from "@mui/icons-material/MoreVert"
// import { IconButton, Menu, MenuItem } from "@mui/material"

// import styles from "./styles.module.css"
// import CrumbsMenu from "@/UI/CrumbsMenu"

// type Tcolors = {
//   text: string
//   bg: string
//   hover: string
// }

// const options = [
//   {
//     callback: () => {
//       console.log("Удалить")
//     },
//     label: "Удалить"
//   },
//   {
//     callback: () => {
//       console.log("Переименовать")
//     },
//     label: "Переименовать"
//   },
//   {
//     callback: () => {
//       console.log("Переместить")
//     },
//     label: "Переместить"
//   }
// ]

// interface Props {
//   id: string
// }

// const ItemMenu = ({ id }: Props) => {
//   const [colors, setColors] = useState<Tcolors | null>({ text: "#fff", bg: "", hover: "" })
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const isOpen = Boolean(anchorEl)

//   const openMenu = (event: MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const closeMenu = (event: SyntheticEvent) => {
//     setAnchorEl(null)
//   }

//   const handleWrapperClick = (event: React.MouseEvent) => {
//     event.preventDefault()
//   }

//   useEffect(() => {
//     const rootStyles = getComputedStyle(document.documentElement)
//     const textClr = rootStyles.getPropertyValue("--text-clr")
//     const bgClr = rootStyles.getPropertyValue("--main-dark-clr")
//     const hoverClr = rootStyles.getPropertyValue("--main-hover-clr")

//     setColors({ text: textClr, bg: bgClr, hover: hoverClr })
//   }, [])

//   return (
//     <div onClick={handleWrapperClick} className={styles.menuWrapper} id={id}>
//       <CrumbsMenu options={options} />
//     </div>
//   )
// }
// export default ItemMenu
