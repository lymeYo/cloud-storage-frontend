import { useAppSelector } from "@/store/hooks"

import parentStyles from "../styles.module.css"
import FileList from "@/components/FileList"

const Files = () => {
  const storage = useAppSelector((store) => store.storage)
  const files = storage.data?.files ?? []

  if (!files.length) return <p className={parentStyles.info}>Нет загруженных файлов</p>

  return <FileList files={files} />
}
export default Files
