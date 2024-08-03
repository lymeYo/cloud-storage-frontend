"use client"

import React, { useEffect } from "react"

import Image from "next/image"

import HeaderLayout from "@/layouts/HeaderLayout"
import RecentFiles from "@/modules/RecentFiles"
import CategoryRow from "@/modules/CategoryRow"
import FoldersRow from "@/modules/FoldersRow"
import StorageStatistics from "@/modules/StorageStatistics"
import CreateButtons from "@/components/CreateButtons"
import SectionTitle from "@/UI/SectionTitle"

import styles from "./styles.module.css"
import { useAppDispatch } from "@/store/hooks"
import { setPath } from "@/store/features/storage/storageSlice"

import MyImage from "@/assets/images/glasses-1.webp"

export default function Home() {
  const dispatch = useAppDispatch()

  //чтобы все загружаемые с этой страницы файлы были прикреплены к корневой директории
  useEffect(() => {
    dispatch(setPath("/"))
  }, [])

  return (
    <HeaderLayout>
      <div className={styles.createButtonsDesktop}>
        <CreateButtons />
      </div>
      <main>
        <section className={styles.section}>
          <SectionTitle text='Хранилище' />
          <div className={styles.createButtonsMobile}>
            <CreateButtons />
          </div>
          <StorageStatistics />
        </section>
        <section className={styles.section}>
          <CategoryRow />
        </section>
        <section className={styles.section}>
          <SectionTitle text='Папки' showAllLink='/folders' />
          <FoldersRow />
        </section>
        <section className={styles.section}>
          <SectionTitle text='Недавние файлы' showAllLink='/folders' />
          <RecentFiles />
        </section>
      </main>
    </HeaderLayout>
  )
}
