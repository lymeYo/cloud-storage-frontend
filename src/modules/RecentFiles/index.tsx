"use client"

import FileList from "@/components/FileList"
import { useAllFilesQuery } from "@/store/api/storage"

const RecentFiles = () => {
  const { data, isLoading } = useAllFilesQuery({ limit: 10, orderType: "DESC" })

  // return <div>{data && <FileList files={data} />}</div>
  return (
    <div>
      <FileList files={data} isLoading={isLoading} />
    </div>
  )
}
export default RecentFiles
