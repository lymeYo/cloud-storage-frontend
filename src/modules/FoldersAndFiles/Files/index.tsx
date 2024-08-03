import { useAppSelector } from "@/store/hooks"

import parentStyles from "../styles.module.css"
import FileList from "@/components/FileList"
import { Tfile } from "@/store/features/storage/utils"

interface Props {
  files: Tfile[]
}

const Files = ({ files }: Props) => {
  if (!files.length) return <p className={parentStyles.info}>Нет загруженных файлов</p>
  return <FileList files={files} isLoading={false} />
}
export default Files
