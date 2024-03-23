import HeaderLayout from "@/layouts/HeaderLayout"
import RecentFiles from "@/modules/RecentFiles"
import CategoryRow from "@/modules/CategoryRow"
import FoldersRow from "@/modules/FoldersRow"
import SideMenu from "@/modules/SideMenu"
import StorageStatistics from "@/modules/StorageStatistics"
import CreateButtons from "@/components/CreateButtons"
import SectionTitle from "@/UI/SectionTitle"

import styles from "./styles.module.css"

export default function Home() {
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
          <SectionTitle text='Папки' withShowAllBtn />
          <FoldersRow />
        </section>
        <section className={styles.section}>
          <SectionTitle text='Недавние файлы' withShowAllBtn />
          <RecentFiles />
        </section>
      </main>
    </HeaderLayout>
  )
}
