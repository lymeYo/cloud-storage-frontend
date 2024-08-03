"use client"
import { ReactNode } from "react"

import AuthModal from "@/modules/AuthModal"
import ActionsModal from "@/modules/ActionsModal"
import Greeting from "./Greeting"
import MenuButton from "./MenuButton"
import Search from "./Search"
import Account from "./Account"
import styles from "./styles.module.css"
import SideMenu from "@/modules/SideMenu"

interface Props {
  children?: ReactNode
}

const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <AuthModal />
      <ActionsModal />
      <div className={styles.contentWithSideMenu}>
        <SideMenu />
        <div className='container'>
          <header className={styles.header}>
            <div className={styles.greetingArea}>
              <MenuButton />
              <Greeting />
            </div>
            <Search />
            <Account />
          </header>

          {children}
        </div>
      </div>
    </>
  )
}
export default HeaderLayout
